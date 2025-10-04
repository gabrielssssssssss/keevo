"use server";

import { NextResponse, NextRequest } from "next/server";
import { decryptPassword } from "@/lib/services/auth-services";
import { getSession } from "@/lib/handler/global-handler";

//Method: POST => Decrypt password in aes-256-gcm.
export async function POST(req: NextRequest) {
    try {
        if (getSession.toString() == "") {
            return NextResponse.json( { success: false, error: "token not valid" }, { status: 401 });
        };
        const { encryptPassword, iv, tag } = await req.json()
        const response = await decryptPassword(encryptPassword, iv, tag);
        return NextResponse.json( {success: true, password: response }, { status: 200 } );
    } catch (e) {
        return NextResponse.json( {success: false, error: (e as Error).message }, { status: 400 } );
    }
}