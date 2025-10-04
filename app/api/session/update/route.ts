/*[app/api/session/update/route.ts]*/
"use server";

import { NextRequest, NextResponse } from "next/server";
import { verifyValue, hashValue } from "@/lib/services/auth-services";
import { getFirstField } from "@/actions/auth-actions";

export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();
        const authResponse = await getFirstField();
        if (await verifyValue(authResponse?.password ?? "", password)) {
            await hashValue(password, "session");
            return NextResponse.json({success: true}, {status: 200});
        }
        return NextResponse.json({success: false}, {status: 401});
    } catch(e) {
        return NextResponse.json({error: (e as Error).message}, {status: 401});
    };
};