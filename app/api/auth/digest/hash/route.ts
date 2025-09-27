"use server";

import { NextResponse, NextRequest } from "next/server";
import { hashValue } from "@/lib/services/auth-services";

//Method: POST => Create hashed password with context.
export async function POST(req: NextRequest) {
    try {
        const { password, context } = await req.json();
        const response = await hashValue(password, context);
        return NextResponse.json( { success: true, "hashedPassword": response } );
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, { status: 400 } )
    }
}