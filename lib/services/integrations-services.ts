"use server";

import crypto from "crypto";

// Route: /api/(integrations)/disclosed.ts
export async function leakCheck(password: string) {
    const sha1 = crypto.createHash("sha1").update(password).digest("hex").toUpperCase();
    const prefix = sha1.slice(0, 5);
    const suffix = sha1.slice(5);

    const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    const text = await response.text();

    const lines = text.split("\r\n");
    for (const line of lines) {
    const [hashSuffix, count] = line.split(":");
    if (hashSuffix === suffix) { return true; }
    }

    return false;
}
