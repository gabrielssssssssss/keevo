"use server";

import { NextRequest, NextResponse } from "next/server";
import { leakCheck } from "@/lib/services/integrations-services";

//Method: POST => Check if password is disclosed.
export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();
        const response = await leakCheck(password);
        return NextResponse.json( { success: response } );
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, { status: 400 } )
    }
}