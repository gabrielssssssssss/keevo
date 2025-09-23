"use server";

import { NextRequest, NextResponse } from "next/server";
import { newFields } from "@/lib/services/credentials-services";
import { credentialEntry } from "@/lib/schema/credentials-schema";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const newEntry: credentialEntry = {
            url: body["url"],
            originUrl: body["originUrl"],
            login: body["login"],
            password: body["password"],
            iv: "",
            tag: "",
            notes: body["notes"],
            category: body["category"]
        }
        const response = await newFields(newEntry);
        if (Boolean(response)) {
            return NextResponse.json({"success": true});
        }
        return NextResponse.json({"success": false, "error": "unknown"});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}