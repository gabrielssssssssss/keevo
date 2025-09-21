"use server";

import { NextResponse, NextRequest } from "next/server";
import { hashPassword } from "@/lib/services/auth-services";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const element = body["element"];
        const context = body["context"];
        const response = await hashPassword(element, context);
        return NextResponse.json({"success": true, "hashedElement": response});
    } catch {
        return NextResponse.json({"success": false, "error": "bad request"});
    }
}