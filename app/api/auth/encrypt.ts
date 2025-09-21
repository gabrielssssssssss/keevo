"use server";

import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto";
import { getSession } from "@/lib/handler/session-handler";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const password = body["password"];
        const algorithm = "aes-256-ctr";
        const key = Buffer.concat([Buffer.from(getSession()), Buffer.alloc(32)], 32);
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(password);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return NextResponse.json({"success": true, "encryptedPassword": iv.toString("hex")+encrypted.toString("hex")});
    } catch {
        return NextResponse.json({"success": false, "error": "bad request"});
    }
}