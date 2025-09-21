import { credentialEntry } from "../schema/credentials-schema";
import { addCredentials } from "@/actions/credentials-actions";
import { encryptPassword } from "./auth-services";

export async function newFields(entry: credentialEntry) {
    const encrypt = await encryptPassword(entry.password);
    entry.password = encrypt;
    return await addCredentials(entry);
}