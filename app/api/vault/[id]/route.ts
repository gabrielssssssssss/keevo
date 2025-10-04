"use server";

import { NextRequest, NextResponse } from "next/server";
import { getVaultItem, getAllVaultItems, deleteVaultItem, updateVaultItemData } from "@/actions/vault-actions";
import { VaultType } from "@/app/database/prisma";
import { VaultData } from "@/lib/models/vault-models";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	const id = params.id;
	try {
		if (id === "*") {
			const data = await getAllVaultItems();
			return NextResponse.json({ success: true, data });
		}
		const data = await getVaultItem(id);
		return NextResponse.json({ success: true, data });
	} catch (e) {
		return NextResponse.json({ success: false, error: (e as Error).message }, { status: 400 });
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	const id = params.id;
	try {
		const success = await deleteVaultItem(id);
		return NextResponse.json({ success });
	} catch (e) {
		return NextResponse.json({ success: false, error: (e as Error).message }, { status: 400 });
	}
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
	const id = params.id;
	try {
		const { type, data } = await req.json() as { type: VaultType, data: VaultData };
		const success = await updateVaultItemData(id, data);
		return NextResponse.json({ success });
	} catch (e) {
		return NextResponse.json({ success: false, error: (e as Error).message }, { status: 400 });
	}
}
