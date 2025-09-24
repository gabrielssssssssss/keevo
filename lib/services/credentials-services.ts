import { credentialEntry } from "../schema/credentials-schema";
import { addCredentials } from "@/actions/credentials-actions";
import { encryptPassword } from "./auth-services";

//Route: /api/credentials/route.ts
export async function newFields(entry: credentialEntry) {
    try {
        const encrypt = await encryptPassword(entry.password);
        entry.password = encrypt.encrypted;
        entry.iv = encrypt.iv;
        entry.tag = encrypt.tag;
        return await addCredentials(entry);
    }  catch (e) {
        return (e as Error).message;
    };
}