"use server";

import { NextResponse, NextRequest } from "next/server";
import { decryptPassword } from "@/lib/services/auth-services";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const encryptPassword = body["encryptPassword"];
        const response = await decryptPassword(encryptPassword);
        return NextResponse.json({"success": true, "password": response});
    } catch {
        return NextResponse.json({"success": false, "error": "bad request"});
    }
}