import {hash} from "argon2";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const element = body["element"];
        const hashedElement = await hash(element);
        return NextResponse.json({"success": true, "hashedElement": hashedElement})
    } catch (e) {
        return NextResponse.json({"success": false, "error": e})
    }
}