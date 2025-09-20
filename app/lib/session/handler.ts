export let SessionKey = null;

import { Hash } from "@/lib/hash/hash";

export async function NewSession(password: string) {
    const hashedPassword = await Hash(password, "session");
    if (SessionKey === null) {
        SessionKey = hashedPassword;
    }
}