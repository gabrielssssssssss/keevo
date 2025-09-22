"use server";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/handler/session-handler";
import { DecryptJWT } from "@/lib/handler/cookies-handler";

export async function POST(req: NextRequest) {
    try {
        if (getSession().toString() == "") {
            return NextResponse.json({"success": false, "error": "bad request"}, {status: 401});
        }
        const body = await req.json();
        const jwtSession = body["jwtSession"];
        const hasAccess = await DecryptJWT(jwtSession);
        return NextResponse.json({"success": hasAccess});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}