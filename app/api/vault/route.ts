"use server";

import { NextRequest, NextResponse } from "next/server";
import { addVaultItem } from "@/actions/vault-actions";
import { VaultType } from "@/app/database/prisma";
import { VaultData } from "@/lib/models/vault-models";

export async function POST(req: NextRequest) {
	try {
		const { type, data } = await req.json() as { type: VaultType, data: VaultData };
		const response = await addVaultItem(type, data);
		return NextResponse.json({ success: Boolean(response) });
	} catch (e) {
		console.log(e);
		return NextResponse.json({ success: false, error: (e as Error).message }, { status: 400 });
	}
}
