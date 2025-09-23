"use server";

import { NextResponse, NextRequest } from "next/server";
import { hashPassword } from "@/lib/services/auth-services";

//Method: POST => Create hashed password with context.
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const password = body["password"];
        const context = body["context"];
        const response = await hashPassword(password, context);
        return NextResponse.json({"success": true, "hashedPassword": response});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400})
    }
}