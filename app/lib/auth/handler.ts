import { VerifyHash, Hash } from "./hash";
import { SyntaxVerify, StoledVerify } from "./utils";
import {FindAll as AuthFindAll, UpdatePassword as AuthUpdatePassword} from "@/lib/database/auth/actions";
import {FindAll as PasswordFindAll} from "@/lib/database/password/actions";

export async function PasswordHandler(password: string) {
    const authResponse = await AuthFindAll();
    const passwordResponse = await PasswordFindAll();

    if (authResponse?.password != "") {
        const verifyResponse = await VerifyHash(password, authResponse?.password ?? "")
        return verifyResponse;
    }

    if (passwordResponse?.length == 0 && authResponse?.password == "") {
        if (password.length >= 12 && password.length < 64) {
            if (await StoledVerify(password)) {
                return false;
            }
            if (!SyntaxVerify(password)) {
                return false;
            }
            const hashedPasswordResponse = await Hash(password, "");
            if (!Boolean(hashedPasswordResponse)) {
                return false;
            }
            return await AuthUpdatePassword(hashedPasswordResponse);
        }
        return false;
    }
    return false;
}