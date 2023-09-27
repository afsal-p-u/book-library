/*
  Warnings:

  - You are about to drop the column `wishlistId` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `Books_wishlistId_fkey`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `wishlistId`;

-- CreateTable
CREATE TABLE `Wishlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `star` INTEGER NOT NULL,
    `wishlistId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Wishlist` ADD CONSTRAINT `Wishlist_wishlistId_fkey` FOREIGN KEY (`wishlistId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
