import { NextRequest, NextResponse } from "next/server";
import { getAllFields } from "@/actions/seedPhrase-actions";
import { verifyHashEachWords } from "@/lib/handler/seedphrase-handler";
import { hashValue } from "@/lib/services/auth-services";
import { updatePassword } from "@/actions/auth-actions";

export async function POST(req: NextRequest) {
    try {
        const { passPhrase, newPassword } = await req.json();
        const passPhraseHashArray = (await getAllFields()).map(e => e.seedHash);

        const isValid = await verifyHashEachWords(passPhrase, passPhraseHashArray);
        if (!isValid) return NextResponse.json({ success: false });

        const hashedPassword = await hashValue(newPassword, "");
        if (!hashedPassword) return NextResponse.json({ success: false });

        const updated = await updatePassword(hashedPassword.toString());
        if (!updated) return NextResponse.json({ success: false });

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ success: false, error: (e as Error).message });
    }
}