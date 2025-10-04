/*
  Warnings:

  - You are about to drop the column `authenticationId` on the `Seedphrase` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Authentification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Authentification" ("createdAt", "id", "password", "updatedAt") SELECT "createdAt", "id", "password", "updatedAt" FROM "Authentification";
DROP TABLE "Authentification";
ALTER TABLE "new_Authentification" RENAME TO "Authentification";
CREATE TABLE "new_Seedphrase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "seedHash" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Seedphrase" ("createdAt", "id", "seedHash") SELECT "createdAt", "id", "seedHash" FROM "Seedphrase";
DROP TABLE "Seedphrase";
ALTER TABLE "new_Seedphrase" RENAME TO "Seedphrase";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
