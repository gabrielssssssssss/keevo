"use server";

import { NextRequest, NextResponse } from "next/server";
import { getCredentials, getAllCredentials, deleteCredentials, updateCredentials } from "@/actions/credentials-actions";
import { credentialEntry, credentialInterface } from "@/lib/schema/credentials-schema";

//Method: GET => Get(s) credentials fields.
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }>} ) {
    try {
        const id = (await params).id;
        if (id == "*") {
            const data = await getAllCredentials();
            return NextResponse.json({"success": true, data});
        }
        const data = await getCredentials(id);
        return NextResponse.json({"success": true, data});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}

//Method: DELETE => Delete credentials fields.
export async function DELETE(req: NextRequest,  { params }: { params: Promise<{ id: string }>} ) {
    try {
        const id = (await params).id;
        const response = await deleteCredentials(id);
        return NextResponse.json({"success": response});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}

//Method: PUT => Update credentials fields.
export async function PUT(req: NextRequest,  { params }: { params: Promise<{ id: string }>} ) {
    try {
        const id = (await params).id;
        const data = await req.json();
        const credentialsData = await getCredentials(id) as credentialInterface[]
        const payload = credentialsData[0] ?? {};

        const url = data["url"] ? data["url"] : payload["url"];
        const originUrl = data["originUrl"] ? data["originUrl"] : payload["originUrl"];
        const login = data["login"] ? data["login"] : payload["login"];
        const password = data["password"] ? data["password"] : payload["password"];
        const iv = data["iv"] ? data["iv"] : payload["iv"];
        const tag = data["tag"] ? data["tag"] : payload["tag"];
        const notes = data["notes"] ? data["notes"] : payload["notes"];
        const category = data["category"] ? data["category"] : payload["category"];

        const updatedData: credentialEntry = {
            url: url,
            originUrl: originUrl,
            login: login,
            password: password,
            iv: iv,
            tag: tag,
            notes: notes,
            category: category
        };

        const response = await updateCredentials(id, updatedData);
        return NextResponse.json({"success": response});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}