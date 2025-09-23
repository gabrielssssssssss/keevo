"use server";

import { NextRequest, NextResponse } from "next/server";
import { getCredentials, getAllCredentials, deleteCredentials } from "@/actions/credentials-actions";

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

export async function DELETE(req: NextRequest,  { params }: { params: Promise<{ id: string }>} ) {
    try {
        const id = (await params).id;
        const response = await deleteCredentials(id);
        return NextResponse.json({"success": response});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}

export async function PUT(req: NextRequest,  { params }: { params: Promise<{ id: string }>} ) {
    try {
        const id = (await params).id;
        const response = await deleteCredentials(id);
        return NextResponse.json({"success": response});
    } catch (e) {
        return NextResponse.json({"success": false, "error": (e as Error).message}, {status: 400});
    }
}