"use server";

import { prisma } from "@/prisma/db";

//Prisma: findFirst() => Get authentification fields.
export async function getFirstField() {
    try {
        const response = await prisma.authentification.findFirst();
        return response;
    } catch {
        return null;
    }
}

//Prisma: create() => Create new fields.
export async function addPassword(password: string) {
    return Boolean(await prisma.authentification.create({
        data: {
            password: password,
        },
    }));
}