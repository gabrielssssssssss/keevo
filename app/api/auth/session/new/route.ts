"use server";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/handler/session-handler";
import { EncryptJwt } from "@/lib/handler/cookies-handler";
import { cookies } from 'next/headers';

export async function GET() {
    try {
        if (getSession().toString() == "") {
            return NextResponse.json({"success": false, "error": "bad request"}, {status: 400});
        }
        const jwt = await EncryptJwt();
        (await cookies()).set("auth-token", jwt, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24
        });
        return NextResponse.json({"success": true});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}