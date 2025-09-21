"use server";

import { NextRequest, NextResponse } from "next/server";
import { leakCheck } from "@/lib/services/integrations-services";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const response = await leakCheck(body["password"]);
        return NextResponse.json({"success": response});
    } catch {
        return NextResponse.json({"success": false, "error": "bad request"})
    }
}