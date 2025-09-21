/*
  Warnings:

  - You are about to drop the column `username` on the `credentials` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_credentials" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL DEFAULT '',
    "originUrl" TEXT NOT NULL DEFAULT '',
    "login" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "iv" TEXT NOT NULL DEFAULT '',
    "tag" TEXT NOT NULL DEFAULT '',
    "notes" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_credentials" ("category", "createdAt", "id", "iv", "notes", "originUrl", "password", "tag", "updatedAt", "url") SELECT "category", "createdAt", "id", "iv", "notes", "originUrl", "password", "tag", "updatedAt", "url" FROM "credentials";
DROP TABLE "credentials";
ALTER TABLE "new_credentials" RENAME TO "credentials";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
