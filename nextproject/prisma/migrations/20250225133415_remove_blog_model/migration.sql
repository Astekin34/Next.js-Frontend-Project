/*
  Warnings:

  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "imageUrl" TEXT;

-- DropTable
DROP TABLE "Blog";
