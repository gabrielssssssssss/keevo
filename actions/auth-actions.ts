/*[actions/auth-actions.ts]*/
"use server";

import { prisma } from "@/prisma/db";

//Prisma: findFirst() => Get authentification fields.
export async function getFirstField() {
    return await prisma.authentification.findFirst(); 
}

//Prisma: create() => Create new fields.
export async function addPassword(password: string) {
    return Boolean(await prisma.authentification.create({
        data: {
            password: password,
        },
    }));
};

//Prisma: update() => Update password fields.
export async function updatePassword(newPassword: string) {
    const getAuth = await getFirstField();
    return Boolean(await prisma.authentification.update({
        where: {
            id: getAuth?.id
        },
        data: {
            password: newPassword,
        }
    }));
};