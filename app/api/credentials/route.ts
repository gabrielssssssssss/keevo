import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        return NextResponse.json({"success": true, "error": "bad request"})
    } catch {
        return NextResponse.json({"success": false, "error": "bad request"})
    }
}