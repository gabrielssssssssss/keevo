"use server";

import { prisma } from "@/prisma/db";

//Prisma: findFirst() => Get authentification fields.
export async function getFirstField() {
    try {
        const response = await prisma.authentification.findFirst();
        return response; 
    } catch {
        return null;
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
    } catch {
        return null;
    };
};

export async function updatePassword(newPassword: string) {
    const getAuth = await getFirstField();
    console.log(getAuth?.id);
    return Boolean(await prisma.authentification.update({
        where: {
            id: getAuth?.id
        },
        data: {
            password: newPassword,
        }
    }))
}