"use server";

import { NextResponse, NextRequest } from "next/server";
import { decryptPassword } from "@/lib/services/auth-services";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const encryptPassword = body["encryptPassword"];
        const iv = body["iv"];
        const tag = body["tag"];
        const response = await decryptPassword(encryptPassword, iv, tag);
        return NextResponse.json({"success": true, "password": response});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400})
    }
}