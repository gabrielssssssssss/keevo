import { NextRequest, NextResponse } from "next/server";
import { renewPassword } from "@/lib/services/auth-services";

//Method: POST=> Renew password by passphrase.
export async function POST(req: NextRequest) {
    try {
        const { passPhrase, newPassword } = await req.json();
        const response = await renewPassword(passPhrase, newPassword);
        return NextResponse.json({ success: response });
    } catch (e) {
        return NextResponse.json({ success: false, error: (e as Error).message });
    }
}