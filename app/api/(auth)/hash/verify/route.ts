import {verify} from "argon2";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const hashedElement = body["hashedElement"]
        const element = body["element"];
        const comparator = await verify(hashedElement, element);
        return NextResponse.json({"success": true, "isValid": Boolean(comparator)})
    } catch (e) {
        return NextResponse.json({"success": false, "error": e})
    }
}