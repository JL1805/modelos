-- CreateTable
CREATE TABLE `rel_rolemenu` (
    `irolemenuid` INTEGER NOT NULL AUTO_INCREMENT,
    `dtcreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtupdated` DATETIME(3) NULL,
    `iroleid` INTEGER NOT NULL,
    `imenuid` INTEGER NOT NULL,

    UNIQUE INDEX `rel_rolemenu_iroleid_imenuid_key`(`iroleid`, `imenuid`),
    PRIMARY KEY (`irolemenuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catroles` (
    `iroleid` INTEGER NOT NULL AUTO_INCREMENT,
    `dtcreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtupdated` DATETIME(3) NULL,
    `vrole` VARCHAR(255) NOT NULL,
    `vdescription` VARCHAR(255) NULL,
    `ishowclient` TINYINT NOT NULL DEFAULT 0,
    `iactivo` TINYINT NOT NULL DEFAULT 1,

    UNIQUE INDEX `catroles_vrole_key`(`vrole`),
    PRIMARY KEY (`iroleid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catmenus` (
    `imenuid` INTEGER NOT NULL AUTO_INCREMENT,
    `dtcreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtupdated` DATETIME(3) NULL,
    `irouteid` INTEGER NULL,
    `imenusuperiorid` INTEGER NULL,
    `iorden` INTEGER NOT NULL,
    `vNombreMenu` VARCHAR(255) NOT NULL,
    `vdescripcion` VARCHAR(255) NOT NULL,
    `iactivo` TINYINT NOT NULL DEFAULT 1,

    UNIQUE INDEX `catmenus_vNombreMenu_key`(`vNombreMenu`),
    PRIMARY KEY (`imenuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catpersonas` (
    `ipersonaid` INTEGER NOT NULL AUTO_INCREMENT,
    `dtcreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dtupdated` DATETIME(3) NULL,
    `vnombres` VARCHAR(255) NULL,
    `vapellidos` VARCHAR(255) NULL,
    `vcelular` VARCHAR(15) NOT NULL,
    `iactivo` TINYINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`ipersonaid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `rel_rolemenu` ADD CONSTRAINT `rel_rolemenu_iroleid_fkey` FOREIGN KEY (`iroleid`) REFERENCES `catroles`(`iroleid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rel_rolemenu` ADD CONSTRAINT `rel_rolemenu_imenuid_fkey` FOREIGN KEY (`imenuid`) REFERENCES `catmenus`(`imenuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
