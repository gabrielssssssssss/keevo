/*[app/api/session/healthz/route.ts]*/
"use server";

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/handler/global-handler";

export async function GET(req: NextRequest) {
    try {
        if (getSession().toString() != "") {
            return NextResponse.json( {"success": true}, { status: 200 } );
        };
        return NextResponse.json( {"success": false}, { status: 401 } );
    } catch(e) {
        return NextResponse.json( {"error": (e as Error).message}, { status: 401 } );
    };
};