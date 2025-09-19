import {hash} from "argon2";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const password = body["password"];
        const hashedPassword = await hash(password);
        return NextResponse.json({"success": true, "hashedPassword": hashedPassword})
    } catch (e) {
        return NextResponse.json({"success": false, "error": e})
    }
}