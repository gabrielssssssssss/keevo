"use server";

import { NextResponse, NextRequest } from "next/server";
import { verifyPassword } from "@/lib/services/auth-services";

//Method: POST => Verify authenticity of hashed password.
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const hashedPassword = body["hashedPassword"];
        const password = body["password"];
        const response = await verifyPassword(hashedPassword, password);
        return NextResponse.json( { success: true, isValid: response } );
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, { status: 400 } )
    }
}