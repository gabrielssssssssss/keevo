"use server";

import { NextResponse, NextRequest } from "next/server";
import { verifyValue } from "@/lib/services/auth-services";

//Method: POST => Verify authenticity of hashed password.
export async function POST(req: NextRequest) {
    try {
        const { hashedPassword, password } = await req.json();
        const response = await verifyValue(hashedPassword, password);
        return NextResponse.json( { success: true, isValid: response }, { status: 200 });
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, { status: 400 } )
    }
};