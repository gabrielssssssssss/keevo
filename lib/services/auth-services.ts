"use server";

import crypto from "crypto";
import { hash, argon2id, verify } from "argon2";
import { getSession, setSession } from "@/lib/handler/session-handler";

//Route: /api/auth/encrypt.ts
export async function encryptPassword(password: string) {
    const algorithm = "aes-256-ctr";
    const key = Buffer.concat([Buffer.from(getSession()), Buffer.alloc(32)], 32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(password);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString("hex")+encrypted.toString("hex");
}

//Route: /api/auth/decrypt.ts
export async function decryptPassword(encryptPassword: string) {
    const algorithm = "aes-256-ctr";
    const key = Buffer.concat([Buffer.from(getSession()), Buffer.alloc(32)], 32);
    const iv = Buffer.from(encryptPassword.substring(0, 32), "hex");
    const encryptedText = Buffer.from(encryptPassword.substring(32), "hex");
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = decipher.update(encryptedText);
    return decrypted.toString();
}

//Route: /api/auth/hashPassword.ts
export async function hashPassword(password: string, context: string) {
    if (context == "session") {
        const salt = crypto.createHash("sha256").update("salty").digest().slice(0, 16);
        const hashedPassword = (await hash(password, { salt, type: argon2id, raw: true })).toString("hex");
        setSession(hashedPassword);
        return hashedPassword;
    }
    const hashedPassword = await hash(password, { type: argon2id });
    return hashedPassword;
}

//Route: /api/auth/verifyPassword.ts
export async function verifyPassword(hashedPassword: string, password: string) {
    const comparator = await verify(hashedPassword, password);
    return comparator;
}

