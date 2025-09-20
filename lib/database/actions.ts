"use server";
import { prisma } from "@/lib/database/db";

export async function FindAll() {
    try {
        const response = await prisma.auth.findFirst();
        return response;
    } catch {
        return null;
    }
}

export async function UpdatePassword(password: string) {
    const findAll = await FindAll();
    return Boolean(await prisma.auth.update({
        data: {
            password: password,
        },
        where: {
            id: findAll?.id,
        }
    }));
}

export async function UpdatePassPhrase(passPhrase: string) {
    const findAll = await FindAll();
    return Boolean(await prisma.auth.update({
        data: {
            passPhrase: passPhrase,
        },
        where: {
            id: findAll?.id,
        }
    }));
}