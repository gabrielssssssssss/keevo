import crypto from "crypto";
import { hash, argon2id, } from "argon2";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const element = body["element"];
        const context = body["context"];
        if (context == "session") {
            const salt = crypto.createHash("sha256").update("salty").digest().slice(0, 16);
            const hashedElement = await hash(element, { salt, type: argon2id, raw: true });
            return NextResponse.json({"success": true, "hashedElement": hashedElement.toString('hex')})
        }
        const hashedElement = await hash(element, { type: argon2id });
        return NextResponse.json({"success": true, "hashedElement": hashedElement}) 
    } catch (e) {
        return NextResponse.json({"success": false, "error": e});
    }
}