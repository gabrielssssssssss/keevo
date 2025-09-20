import { VerifyHash, Hash } from "./hash";
import { SyntaxVerify, StoledVerify } from "./utils";
import { PassPhraseCreate, PassPhraseVerify } from "./passphrase";

export function AuthHandler(password: string) {
    const machin = async() => {
        await PassPhraseHandler()
    }
    machin()
    const credentials = localStorage.getItem("SECRET_KEY");
    if (credentials != null) {
        const callback = async() => {
            return await VerifyHash(password, credentials)
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
        const hashedPasswordResponse = await Hash(password);
        if (!Boolean(hashedPasswordResponse)) {
            return false;
        }
        return Boolean(await localStorage.setItem("SECRET_KEY", hashedPasswordResponse));
    }
    return false;
}

export async function PassPhraseHandler() {
    const phrase = PassPhraseCreate();
    console.log(phrase.join(" "));
    const encrypt = await Hash(phrase.join(" "));
    console.log(encrypt);
    const truc = await PassPhraseVerify(phrase, encrypt);
    console.log(truc);
}