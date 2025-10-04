/*[actions/seedPhrase-actions.ts]*/
"use server";

import { prisma } from "@/prisma/db";

//Prisma: findFirst() => Get seedPhrase fields.
export async function getFirstField() {
    return await prisma.seedPhrase.findFirst();
};

//Prisma: findMany() => Get all seed phrase.
export async function getAllFields() {
    return await prisma.seedPhrase.findMany({
        select: {
            seedHash: true,
        },
    })
};

//Prisma: create() => Add new fields in seedPhrase
export async function addSeedHash(seedHash: string) {
    return Boolean(await prisma.seedPhrase.create({
        data: {
            seedHash: seedHash
        }
    }));
};