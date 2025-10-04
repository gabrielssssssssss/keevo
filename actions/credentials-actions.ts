/*[actions/credentials-actions.ts]*/
"use server";

import { prisma } from "@/prisma/db";
import { Credentials } from "@/lib/models/credentials-models";

//Prisma: findMany() => Get all credentials fields.
export async function getAllCredentials() {
    return await prisma.credentials.findMany();
};

//Prisma: create() => Create new fields.
export async function addCredentials(models: Credentials) {
    return Boolean(await prisma.credentials.create({
        data: {
            url: models.url,
            login: models.login,
            originUrl: models.originUrl,
            password: models.password,
            notes: models.notes,
            category: models.category,
            iv: models.iv,
            tag: models.tag,
        }
    }));
};

//Prisma: findMany() => Get credentials fields by id.
export async function getCredentials(id: string) {
    return await prisma.credentials.findMany({where: {
        id: id
    }});
};

//Prisma: delete() => Delete credentials fields by id.
export async function deleteCredentials(id: string) {
    return Boolean(await prisma.credentials.delete({where: {
        id: id
    }}));
};

//Prisma: update() => Update credentials fields by id, interface.
export async function updateCredentials(id: string, models: Credentials) {
    return Boolean(await prisma.credentials.update({
        where: {
            id: id
        },
        data: {
            url: models.url,
            originUrl: models.originUrl,
            login: models.login,
            password: models.password,
            iv: models.iv,
            tag: models.tag,
            notes: models.notes,
            category: models.category
        }
    }));
};

export async function updateCredentialsPassword(id: string, password: string, iv: string, tag: string) {
    return Boolean(await prisma.credentials.update({
        where: {
            id: id,
        },
        data: {
            password: password,
            iv: iv,
            tag: tag
        }
    }));
};