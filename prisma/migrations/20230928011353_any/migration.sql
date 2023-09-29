/*
  Warnings:

  - Added the required column `downloadUrl` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Made the column `downloadUrl` on table `collection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `books` ADD COLUMN `downloadUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `collection` MODIFY `downloadUrl` VARCHAR(191) NOT NULL;
