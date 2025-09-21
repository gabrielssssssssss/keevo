"use server";
import { prisma } from "@/lib/database/db";

export async function FindAll() {
    try {
        const response = await prisma.password.findMany();
        return response;
    } catch {
        return null;
    }
}

export async function Push(url: string, originUrl: string, password: string, notes: string, category: string) {
    try {
        const response = await prisma.password.create({
            data: {
                
            }
        })
    } catch {
        return null
    }
}