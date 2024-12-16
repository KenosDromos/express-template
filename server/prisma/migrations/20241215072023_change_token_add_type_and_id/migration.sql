/*
  Warnings:

  - The primary key for the `Token` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `type` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('ACCESS', 'REFRESH', 'RESET_PASSWORD', 'VERIFY_EMAIL');

-- AlterTable
ALTER TABLE "Token" DROP CONSTRAINT "Token_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "type" "TokenType" NOT NULL,
ADD CONSTRAINT "Token_pkey" PRIMARY KEY ("id");
