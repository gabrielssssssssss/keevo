import { NextRequest, NextResponse } from "next/server";
import { getAllFields } from "@/actions/seedPhrase-actions";
import { verifyHashEachWords } from "@/lib/handler/seedphrase-handler";
import { decryptPassword, encryptPassword, hashValue } from "@/lib/services/auth-services";
import { updatePassword } from "@/actions/auth-actions";
import { getAllCredentials, updateCredentialsPassword } from "@/actions/credentials-actions";

//Method: POST=> Renew password by passphrase.
export async function POST(req: NextRequest) {
    try {
        const { passPhrase, newPassword } = await req.json();
        const passPhraseHashArray = (await getAllFields()).map(e => e.seedHash);

        const isValid = await verifyHashEachWords(passPhrase, passPhraseHashArray);
        if (!isValid) return NextResponse.json({ success: false });
        
        const allCredentials = await getAllCredentials();
        const dictionary = new Map();

        for (const element of allCredentials) {
            const id = element.id;
            const iv = element.iv;
            const tag = element.tag;
            const password = element.password;
            try {
                const uncrypted = await decryptPassword(password, iv, tag);
                dictionary.set(id, Buffer.from(uncrypted, "utf-8"));
            } catch{ continue }
        }

        const hashedPassword = await hashValue(newPassword, "");
        if (!hashedPassword) return NextResponse.json({ success: false });
        
        for (const [index, element] of dictionary) {
            const encryptedPassword = await encryptPassword(element.toString());
            await updateCredentialsPassword(index, encryptedPassword.encrypted, encryptedPassword.iv, encryptedPassword.tag);
        }

        const updated = await updatePassword(hashedPassword.toString());
        if (!updated) return NextResponse.json({ success: false });
        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ success: false, error: (e as Error).message });
    }
}