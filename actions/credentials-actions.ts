"use server";

import { prisma } from "@/prisma/db";
import { credentialEntry } from "@/lib/schema/credentials-schema";

export async function getAllCredentials() {
    try {
        const response = await prisma.credentials.findMany();
        return response;
    } catch (e) {
        return (e as Error).message;
    }
}

export async function addCredentials(entry: credentialEntry) {
    try {
        return Boolean(await prisma.credentials.create({
            data: {
                url: entry.url,
                login: entry.login,
                originUrl: entry.originUrl,
                password: entry.password,
                notes: entry.notes,
                category: entry.category,
                iv: entry.iv,
                tag: entry.tag,
            }
        }));
    } catch (e) {
        return (e as Error).message;
    }
}

export async function getCredentials(id: string) {
    try {
        return await prisma.credentials.findMany({where: {
            id: id
        }})
    } catch (e) {
        return (e as Error).message;
    }
}

export async function deleteCredentials(id: string) {
    try {
        return Boolean(await prisma.credentials.delete({where: {
            id: id
        }}))
    } catch (e) {
        return (e as Error).message;
    }
}