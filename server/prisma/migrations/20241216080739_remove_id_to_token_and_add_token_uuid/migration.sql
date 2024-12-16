/*
  Warnings:

  - The primary key for the `Token` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Token` table. All the data in the column will be lost.
  - Changed the type of `token` on the `Token` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Token" DROP CONSTRAINT "Token_pkey",
DROP COLUMN "id",
DROP COLUMN "token",
ADD COLUMN     "token" UUID NOT NULL,
ADD CONSTRAINT "Token_pkey" PRIMARY KEY ("token");
