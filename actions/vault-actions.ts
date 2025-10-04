"use server";

import { prisma } from "@/prisma/db";
import { VaultType, VaultItem } from "@/app/database/prisma";
import { VaultData } from "@/lib/models/vault-models";

export async function getAllVaultItems(type?: VaultType) {
  return await prisma.vaultItem.findMany({
    where: type ? { type } : undefined
  });
}

export async function addVaultItem(type: VaultType, data: VaultData) {
  return Boolean(await prisma.vaultItem.create({
    data: { type, data }
  }));
}

export async function getVaultItem(id: string, type?: VaultType) {
  const item = await prisma.vaultItem.findUnique({ where: { id } });
  if (!item) return null;
  if (type && item.type !== type) return null;
  return item.data;
}

export async function deleteVaultItem(id: string) {
  return Boolean(await prisma.vaultItem.delete({ where: { id } }));
}

export async function updateVaultItem(id: string, type: VaultType, data: VaultData) {
  return Boolean(await prisma.vaultItem.update({
    where: { id },
    data: { type, data }
  }));
}

export async function updateVaultItemData(id: string, updatedData: Partial<VaultData>) {
  const item = await prisma.vaultItem.findUnique({ where: { id } });
  if (!item) return false;

  return Boolean(await prisma.vaultItem.update({
    where: { id },
    data: { data: { ...(item.data as object), ...updatedData } }
  }));
}
