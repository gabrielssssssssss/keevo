"use server";

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/handler/session-handler";
import { DecryptJWT } from "@/lib/handler/cookies-handler";
import { getCookiesValue } from "@/lib/utils";

export async function GET(req: NextRequest) {
    try {
        if (getSession().toString() == "") {
            return NextResponse.json({"success": false, "error": "bad request"}, {status: 401});
        }
        const token = await getCookiesValue(req, "auth-token");
        const hasAccess = await DecryptJWT(token);
        return NextResponse.json({"success": hasAccess});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}