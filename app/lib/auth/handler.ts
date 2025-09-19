import { VerifyPassword, HashedPassword } from "./password";
import { SyntaxVerify, StoledVerify } from "./utils";

export function AuthHandler(password: string) {
    const credentials = localStorage.getItem("SECRET_KEY");
    if (credentials != null) {
        const callback = async() => {
            return await VerifyPassword(password, credentials)
        }
        if (Boolean(callback())) {
            return true;
        }
    }
    return false;
}

export async function PasswordHandler(password: string) {
    if (password.length >= 12 && password.length < 64) {
        if (await StoledVerify(password)) {
            return false;
        }
        if (!SyntaxVerify(password)) {
            return false;
        }
        const hashedPasswordResponse = await HashedPassword(password);
        if (!Boolean(hashedPasswordResponse)) {
            return false;
        }
        return Boolean(await localStorage.setItem("SECRET_KEY", hashedPasswordResponse));;
    }
    return false;
}