import { credentialEntry } from "../schema/credentials-schema";
import { addCredentials } from "@/actions/credentials-actions";
import { encryptPassword } from "./auth-services";

export async function newFields(entry: credentialEntry) {
    const encrypt = await encryptPassword(entry.password);
    entry.password = encrypt.encrypted;
    entry.iv = encrypt.iv;
    entry.tag = encrypt.tag;
    return await addCredentials(entry);
}