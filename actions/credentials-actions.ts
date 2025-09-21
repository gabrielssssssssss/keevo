"use server";

import { prisma } from "@/prisma/db";
import { credentialEntry } from "@/lib/schema/credentials-schema";

export async function getAllCredentials() {
    try {
        const response = await prisma.credentials.findMany();
        return response;
    } catch {
        return null;
    }
}

export async function addCredentials(entry: credentialEntry) {
    try {
        return Boolean(await prisma.credentials.create({
            data: {
                url: entry.url,
                originUrl: entry.originUrl,
                password: entry.password,
                notes: entry.notes,
                category: entry.category,
            }
        }));
    } catch {
        return null
    }
}