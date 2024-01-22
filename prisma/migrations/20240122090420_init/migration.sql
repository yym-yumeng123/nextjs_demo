-- CreateTable
CREATE TABLE `Topic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Option` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `topicId` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Topic` ADD CONSTRAINT `Topic_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserN`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
