/*[app/lib/services/credentials-services.ts]*/
import { Credentials } from "@/lib/models/credentials-models";
import { addCredentials } from "@/actions/credentials-actions";
import { encryptPassword } from "./auth-services";

//Route: /api/credentials/route.ts
export async function newFields(models: Credentials) {
    const encrypt = await encryptPassword(models.password);
    models.password = encrypt.encrypted;
    models.iv = encrypt.iv;
    models.tag = encrypt.tag;
    return await addCredentials(models);
}