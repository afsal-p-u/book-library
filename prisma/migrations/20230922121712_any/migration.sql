-- CreateTable
CREATE TABLE `Collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `star` INTEGER NOT NULL,
    `downloadUrl` VARCHAR(191) NULL,
    `collectionId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Collection` ADD CONSTRAINT `Collection_collectionId_fkey` FOREIGN KEY (`collectionId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
