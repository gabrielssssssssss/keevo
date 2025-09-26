"use server";

import { prisma } from "@/prisma/db";
import { Prisma } from "@prisma/client";

//Prisma: findFirst() => Get seedPhrase fields.
export async function getFirstField() {
    try {
        const response = await prisma.seedPhrase.findFirst();
        return response;
    } catch (e) {
        return (e as Error).message;
    };
};

//Prisma: findMany() => Get all seed phrase.
export async function getAllFields() {
    try {
        return await prisma.seedPhrase.findMany({
            select: {
                seedHash: true,
            },
        })
    } catch (e) {
        throw new Error((e as Error).message)
    }
}


//Prisma: create() => Add new fields in seedPhrase
export async function addSeedHash(seedHash: string) {
    try {
        return Boolean(await prisma.seedPhrase.create({
            data: {
                seedHash: seedHash
            }
        }));
    } catch (e) {
        return (e as Error).message;
    };
}