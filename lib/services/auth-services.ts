"use server";

import crypto from "crypto";
import { hash, argon2id, verify } from "argon2";
import { getSession, setSession } from "@/lib/handler/session-handler";
import { getAllFields } from "@/actions/seedPhrase-actions";
import { verifyHashEachWords } from "@/lib/handler/seedphrase-handler";
import { updatePassword } from "@/actions/auth-actions";
import { getAllCredentials, updateCredentialsPassword } from "@/actions/credentials-actions";

//Route: /api/auth/encryptPassword/route.ts
export async function encryptPassword(password: string) {
	const key = Buffer.concat([Buffer.from(getSession().toString()), Buffer.alloc(32)], 32)
	const iv = crypto.randomBytes(12);
	const cipher = crypto.createCipheriv("aes-256-gcm", key, iv)
	const encrypted = Buffer.concat([cipher.update(password, "utf8"), cipher.final()])
	const tag = cipher.getAuthTag()
	
	return {
		encrypted: encrypted.toString("hex"),
		iv: iv.toString("hex"),
		tag: tag.toString("hex")
	}
}

//Route: /api/auth/decryptPassword/route.ts
export async function decryptPassword(encrypted: string, ivHex: string, tagHex: string) {
	const key = Buffer.concat([Buffer.from(getSession().toString()), Buffer.alloc(32)], 32)
	const iv = Buffer.from(ivHex, "hex")
	const tag = Buffer.from(tagHex, "hex")
	const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv)
	decipher.setAuthTag(tag)
	const decrypted = Buffer.concat([decipher.update(Buffer.from(encrypted, "hex")), decipher.final()])
	return decrypted.toString("utf8")
}

//Route: /api/auth/hashPassword/route.ts
export async function hashValue(value: string, context: string) {
	if (context == "session") {
		const salt = crypto.createHash("sha256").update("salty").digest().slice(0, 16);
		const hashedValue = Buffer.from(
			await hash(value, {
				salt,
				type: argon2id,
				timeCost: 4,
				memoryCost: 2 ** 17,
				raw: true
			})
		);
		setSession(hashedValue);
		return hashedValue;
	}
	const hashedValue = await hash(value, { type: argon2id });
	return hashedValue;
}

//Route: /api/auth/verifyPassword/route.ts
export async function verifyValue(hashedValue: string, value: string) {
	const comparator = await verify(hashedValue, value);
	return comparator;
}

//Route: /api/auth/forgot-password/route.ts
export async function renewPassword(passPhrase: string[], newPassword: string) {
	const passPhraseHashArray = (await getAllFields()).map(e => e.seedHash);

	const isValid = await verifyHashEachWords(passPhrase, passPhraseHashArray);
	if (!isValid) return false;
	
	const allCredentials = await getAllCredentials();
	const dictionary = new Map();

	for (const element of allCredentials) {
		const id = element.id;
		const iv = element.iv;
		const tag = element.tag;
		const password = element.password;
		try {
			const uncrypted = await decryptPassword(password, iv, tag);
			dictionary.set(id, Buffer.from(uncrypted, "utf-8"));
		} catch{ continue };
	}

	const hashedPassword = await hashValue(newPassword, "");
	if (!hashedPassword) return false;
	
	for (const [index, element] of dictionary) {
		const encryptedPassword = await encryptPassword(element.toString());
		await updateCredentialsPassword(index, encryptedPassword.encrypted, encryptedPassword.iv, encryptedPassword.tag);
	}

	const updated = await updatePassword(hashedPassword.toString());
	return Boolean(updated);
}