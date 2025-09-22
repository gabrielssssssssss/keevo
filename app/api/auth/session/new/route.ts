"use server";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/handler/session-handler";
import { EncryptJwt } from "@/lib/handler/cookies-handler";

export async function GET() {
    try {
        if (getSession().toString() == "") {
            return NextResponse.json({"success": false, "error": "bad request"}, {status: 400});
        }
        const jwt = await EncryptJwt();
        return NextResponse.json({"success": true, "jwt": jwt});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}