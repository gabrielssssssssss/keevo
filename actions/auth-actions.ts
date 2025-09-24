"use server";

import { prisma } from "@/prisma/db";

//Prisma: findFirst() => Get authentification fields.
export async function getFirstField() {
    try {
        const response = await prisma.authentification.findFirst();
        return response;
    } catch (e) {
        return (e as Error).message;
    };
}

//Prisma: create() => Create new fields.
export async function addPassword(password: string) {
    try {
        return Boolean(await prisma.authentification.create({
            data: {
                password: password,
            },
        }));
    } catch (e) {
        return (e as Error).message;
    };
}