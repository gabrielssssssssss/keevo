"use server";

import { prisma } from "@/prisma/db";

export async function getFirstField() {
    try {
        const response = await prisma.authentification.findFirst();
        return response;
    } catch {
        return null;
    }
}

export async function addPassword(password: string) {
    return Boolean(await prisma.authentification.create({
        data: {
            password: password,
        },
    }));
}