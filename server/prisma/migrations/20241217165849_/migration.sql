/*
  Warnings:

  - You are about to drop the column `expireAt` on the `Token` table. All the data in the column will be lost.
  - Added the required column `expiredAt` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Token" DROP COLUMN "expireAt",
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL;
