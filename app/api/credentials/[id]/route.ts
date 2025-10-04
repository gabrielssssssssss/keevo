/*[app/api/credentials/[id]/route.ts]*/
"use server";

import { NextRequest, NextResponse } from "next/server";
import { getCredentials, getAllCredentials, deleteCredentials, updateCredentials } from "@/actions/credentials-actions";
import { Credentials } from "@/lib/models/credentials-models";
import { encryptPassword } from "@/lib/services/auth-services";

//Method: GET => Get(s) credentials fields.
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }>} ) {
    try {
        const id = (await params).id;
        if (id == "*") {
            const data = await getAllCredentials();
            return NextResponse.json( { success: true, data } );
        }
        const data = await getCredentials(id);
        return NextResponse.json( { success: true, data } );
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, {status: 400} );
    }
}

//Method: DELETE => Delete credentials fields.
export async function DELETE(req: NextRequest,  { params }: { params: Promise<{ id: string }>} ) {
    try {
        const id = (await params).id;
        const response = await deleteCredentials(id);
        return NextResponse.json( { success: response } );
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, {status: 400} );
    }
}

//Method: PUT => Update credentials fields.
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const data = await req.json();
        const credentialsData = await getCredentials(id)
        const payload = credentialsData[0];

        const {
            url = payload.url,
            originUrl = payload.originUrl,
            login = payload.login,
            notes = payload.notes,
            category = payload.category,
            password: rawPassword,
            iv: rawIv,
            tag: rawTag
        } = data;

        let password = rawPassword ?? payload.password;
        let iv = rawIv ?? payload.iv;
        let tag = rawTag ?? payload.tag;

        if (rawPassword) {
            const { encrypted, iv: newIv, tag: newTag } = await encryptPassword(password);
            password = encrypted;
            iv = newIv;
            tag = newTag;
        }

        const updatedData: Credentials = { id, url, originUrl, login, notes, category, password, iv, tag };
        const success = await updateCredentials(id, updatedData);
        return NextResponse.json({ success });
    } catch (e) {
        return NextResponse.json( { success: false, error: (e as Error).message }, {status: 400} );
    }
}
