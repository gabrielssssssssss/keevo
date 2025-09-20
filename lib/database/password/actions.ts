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