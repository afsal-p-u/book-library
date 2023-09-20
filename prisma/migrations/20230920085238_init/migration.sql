/*
  Warnings:

  - You are about to drop the column `cartId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `purchasedId` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `Books_cartId_fkey`;

-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `Books_purchasedId_fkey`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `cartId`,
    DROP COLUMN `purchasedId`;
