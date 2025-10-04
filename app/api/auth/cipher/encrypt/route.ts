"use server";

import { NextResponse, NextRequest } from "next/server";
import { encryptPassword } from "@/lib/services/auth-services";

//Method: POST => Encrypt password in aes-256-gcm.
export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();
        const response = await encryptPassword(password);
        return NextResponse.json( { success: true, encryptedPassword: response }, { status: 200 } );
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, { status: 400 } )
    }
}