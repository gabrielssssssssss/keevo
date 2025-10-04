/*[app/lib/services/auth-services.ts]*/
"use server";

import crypto from "crypto";
import { hash, argon2id, verify } from "argon2";
import { getSession, setSession } from "@/lib/handler/global-handler";
import { getAllFields } from "@/actions/seedPhrase-actions";
import { verifyHashEachWords } from "@/lib/handler/seedphrase-handler";
import { updatePassword } from "@/actions/auth-actions";
import { getAllCredentials, updateCredentialsPassword } from "@/actions/credentials-actions";

export async function encryptPassword(password: string) {
    const key = Buffer.concat([Buffer.from(getSession().toString()), Buffer.alloc(32)], 32);
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
    const encrypted = Buffer.concat([cipher.update(password, "utf8"), cipher.final()]);
    return { encrypted: encrypted.toString("hex"), iv: iv.toString("hex"), tag: cipher.getAuthTag().toString("hex") };
};

export async function decryptPassword(encrypted: string, ivHex: string, tagHex: string) {
    const key = Buffer.concat([Buffer.from(getSession().toString()), Buffer.alloc(32)], 32);
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.from(ivHex, "hex"));
    decipher.setAuthTag(Buffer.from(tagHex, "hex"));
    return Buffer.concat([decipher.update(Buffer.from(encrypted, "hex")), decipher.final()]).toString("utf8");
};

export async function hashValue(value: string, context: string) {
    if (context === "session") {
        const salt = crypto.createHash("sha256").update("salty").digest().slice(0, 16);
        const hashed = Buffer.from(await hash(value, { salt, type: argon2id, timeCost: 4, memoryCost: 2 ** 17, raw: true }));
        setSession(hashed);
        return hashed;
    }
    return hash(value, { type: argon2id });
};

export async function verifyValue(hashedValue: string, value: string) {
    return verify(hashedValue, value);
};

export async function renewPassword(passPhrase: string[], newPassword: string) {
    if (!await verifyHashEachWords(passPhrase, (await getAllFields()).map(e => e.seedHash))) return false;

    const credentials = await getAllCredentials();
    const dictionary = new Map();

    await Promise.all(credentials.map(async ({ id, password, iv, tag }) => {
        try { dictionary.set(id, Buffer.from(await decryptPassword(password, iv, tag), "utf-8")); } catch {}
    }));

    const hashedPassword = await hashValue(newPassword, "");
    if (!hashedPassword) return false;

    for (const [id, value] of dictionary) {
        const { encrypted, iv, tag } = await encryptPassword(value.toString());
        await updateCredentialsPassword(id, encrypted, iv, tag);
    }

    return Boolean(await updatePassword(hashedPassword.toString()));
};