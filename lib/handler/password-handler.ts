import { verifyHash, newHash } from "@/lib/crypto";
import { SyntaxVerify, StoledVerify } from "@/lib/utils";
import { getFirstField, addPassword } from "@/actions/auth-actions";
import { getAllCredentials } from "@/actions/credentials-actions";

export async function passwordHandler(password: string) {
    const authResponse = await getFirstField();
    const passwordResponse = await getAllCredentials();
    if (authResponse?.password != "" && authResponse != null) {
        const verifyResponse = await verifyHash(password, authResponse?.password ?? "");
        return verifyResponse;
    }
    if (passwordResponse?.length == 0 && authResponse == null) {
        if (password.length >= 12 && password.length < 64) {
            if (await StoledVerify(password)) return false;
            if (!SyntaxVerify(password)) return false;

            const hashedPasswordResponse = await newHash(password, "");
            if (!Boolean(hashedPasswordResponse)) return false;

            return await addPassword(hashedPasswordResponse);
        }
        return false;
    }
    return false;
}