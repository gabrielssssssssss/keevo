"use server";

import { NextResponse, NextRequest } from "next/server";
import { encryptPassword } from "@/lib/services/auth-services";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const password = body["password"];
        const response = await encryptPassword(password);
        return NextResponse.json({"success": true, "encryptedPassword": response});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400})
    }
}