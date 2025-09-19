import {verify} from "argon2";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const hashedPassword = body["hashedPassword"]
        const password = body["password"];
        const comparator = await verify(hashedPassword, password);
        return NextResponse.json({"success": true, "isValid": Boolean(comparator)})
    } catch (e) {
        return NextResponse.json({"success": false, "error": e})
    }
}