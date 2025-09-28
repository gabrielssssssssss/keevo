"use server";

import { getAllCredentials } from "@/actions/credentials-actions";
import { jsonToCsv } from "@/lib/utils";

export async function exportCredentials() {
    const data = await getAllCredentials();
    return jsonToCsv(data);
}