"use server";

import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto";
import { getSession } from "@/lib/handler/session-handler";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const encryptPassword = body["encryptPassword"];
        const algorithm = "aes-256-ctr";
        const key = Buffer.concat([Buffer.from(getSession()), Buffer.alloc(32)], 32);
        const iv = Buffer.from(encryptPassword.substring(0, 32), "hex");
        const encryptedText = Buffer.from(encryptPassword.substring(32), "hex");
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        const decrypted = decipher.update(encryptedText);
        return NextResponse.json({"success": true, "password": decrypted.toString()});
    } catch {
        return NextResponse.json({"success": false, "error": "bad request"});
    }
}