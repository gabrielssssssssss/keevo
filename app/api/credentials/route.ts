"use server";

import { NextRequest, NextResponse } from "next/server";
import { newFields } from "@/lib/services/credentials-services";
import { credentialEntry } from "@/lib/schema/credentials-schema";

//Method: POST => Add new fields in credentials.
export async function POST(req: NextRequest) {
    try {
        const { url, originUrl, login, password, notes, category } = await req.json();
        const newEntry: credentialEntry = {
            url: url,
            originUrl: originUrl,
            login: login,
            password: password,
            iv: "",
            tag: "",
            notes: notes,
            category: category
        }
        const response = await newFields(newEntry);
        if (Boolean(response)) {
            return NextResponse.json( { success: true } );
        }
        return NextResponse.json( { success: false, error: "unknown" } );
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, {status: 400} );
    }
}