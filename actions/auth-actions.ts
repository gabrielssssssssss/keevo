/*[actions/auth-actions.ts]*/
"use server";

import { prisma } from "@/prisma/db";

export async function getFirstField() {
    return await prisma.authentification.findFirst(); 
}

export async function addPassword(password: string) {
    return Boolean(await prisma.authentification.create({
        data: {
            password: password,
        },
    }));
};

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