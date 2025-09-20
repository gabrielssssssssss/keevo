import { VerifyHash, Hash } from "./hash";
import { SyntaxVerify, StoledVerify } from "./utils";
import { PassPhraseCreate, PassPhraseVerify } from "./passphrase";
import {FindAll, UpdatePassword} from "@/lib/database/actions";

export async function PasswordHandler(password: string) {
    const authResponse = await FindAll();
    // const verifyResponse = await VerifyHash(password, authResponse?.password ?? "");
    console.log("authResponse?.password")
    if (authResponse?.password == "") {
        if (password.length >= 12 && password.length < 64) {
            if (await StoledVerify(password)) {
                return false;
            }
            if (!SyntaxVerify(password)) {
                return false;
            }
            const hashedPasswordResponse = await Hash(password);
            console.log(hashedPasswordResponse);
            if (!Boolean(hashedPasswordResponse)) {
                return false;
            }
            return await UpdatePassword(hashedPasswordResponse);
        }
        return false;
    }
    return false;
}

export async function PassPhraseHandler(passPhrase: string) {
    const phrase = PassPhraseCreate();
    console.log(phrase.join(" "));
    const encrypt = await Hash(phrase.join(" "));
    console.log("Passphrase: ", encrypt);
    const truc = await PassPhraseVerify(phrase, encrypt);
    console.log(truc);
}
