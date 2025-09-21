/*
  Warnings:

  - You are about to drop the column `passPhrase` on the `authentification` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_authentification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_authentification" ("createdAt", "id", "password", "updatedAt") SELECT "createdAt", "id", "password", "updatedAt" FROM "authentification";
DROP TABLE "authentification";
ALTER TABLE "new_authentification" RENAME TO "authentification";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
