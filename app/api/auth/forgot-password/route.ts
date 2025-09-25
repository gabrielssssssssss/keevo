import { NextRequest, NextResponse } from "next/server";
import { getAllFields } from "@/actions/seedPhrase-actions";
import { verifyHashEachWords } from "@/lib/handler/seedphrase-handler";
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const passPhrase = body["passPhrase"];
        const newPassword = body["newPassword"];
        const passPhraseHash = await getAllFields();

        // const secret = await verifyHashEachWords(passPhrase, payload)
        console.log(passPhrase);
        console.log(passPhraseHash);
        return NextResponse.json( { success: true } )

    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message } )
    }
}