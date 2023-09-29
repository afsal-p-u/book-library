/*
  Warnings:

  - Added the required column `downloadUrl` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `downloadUrl` VARCHAR(191) NOT NULL;
