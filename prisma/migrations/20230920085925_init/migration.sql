-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `Books_wishlistId_fkey`;

-- AlterTable
ALTER TABLE `books` MODIFY `wishlistId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_wishlistId_fkey` FOREIGN KEY (`wishlistId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
