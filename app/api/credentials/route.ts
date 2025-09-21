import crypto from "crypto";
import { hash, argon2id, } from "argon2";
import { NextRequest, NextResponse } from "next/server";
import { Create } from "@/lib/database/credentials/actions";
import { getSession } from "@/lib/session/handler";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const secretKey = getSession();
        console.log("[SAFE]: ", secretKey);
        const salt = crypto.createHash("sha256").update(secretKey).digest().slice(0, 16);
        const hashedPassword = await hash(body["password"], { salt, type: argon2id, raw: true });
        const response = await Create(body["url"], body["originUrl"], hashedPassword.toString("hex"), body["notes"], body["category"]);
        if (Boolean(response)) {
            return NextResponse.json({"success": true, "msg": "credentials added with successfully!"})
        }
        return NextResponse.json({"success": false, "error": "bad request"})
    } catch {
        return NextResponse.json({"success": false, "error": "bad request"})
    }
}