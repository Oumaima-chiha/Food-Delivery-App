-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE =
        'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;
USE `mydb`;

-- -----------------------------------------------------
-- Table `mydb`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`customer`
(
    `iduser`       INT         NOT NULL,
    `userName`     VARCHAR(45) NOT NULL,
    `userLastName` VARCHAR(45) NOT NULL,
    `userAdress`   VARCHAR(45) NOT NULL,
    `userNumber`   VARCHAR(45) NOT NULL,
    PRIMARY KEY (`iduser`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cart`
(
    `foodOrder`       INT         NOT NULL,
    `orderStatus`     VARCHAR(45) NOT NULL,
    `customer_iduser` INT         NOT NULL,
    PRIMARY KEY (`foodOrder`),
    INDEX `fk_cart_customer1_idx` (`customer_iduser` ASC),
    CONSTRAINT `fk_cart_customer1`
        FOREIGN KEY (`customer_iduser`)
            REFERENCES `mydb`.`customer` (`iduser`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Owner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Owner`
(
    `username`        VARCHAR(16)  NOT NULL,
    `email`           VARCHAR(255) NULL,
    `password`        VARCHAR(32)  NOT NULL,
    `create_time`     TIMESTAMP    NULL DEFAULT CURRENT_TIMESTAMP,
    `restaurant_name` VARCHAR(45)  NULL,
    `food_category`   VARCHAR(45)  NULL,
    `idOwner`         INT          NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`idOwner`),
    UNIQUE INDEX `username_UNIQUE` (`username` ASC)
);


-- -----------------------------------------------------
-- Table `mydb`.`food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`food`
(
    `Idfood`         INT          NOT NULL AUTO_INCREMENT,
    `name`           VARCHAR(45)  NOT NULL,
    `imgUrl`         VARCHAR(245) NOT NULL,
    `price`          VARCHAR(45)  NOT NULL,
    `desc`           VARCHAR(245) NOT NULL,
    `Owner_idOwner`  INT          NOT NULL,
     PRIMARY KEY (`Idfood`),
    CONSTRAINT `fk_food_Owner1`
        FOREIGN KEY (`Owner_idOwner`)
            REFERENCES `mydb`.`Owner` (`idOwner`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cart_food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cart_food`
(
    `cart_food_id`     INT NOT NULL AUTO_INCREMENT,
    `cart_foodOrder`   INT NOT NULL,
    `food_Idfood`      INT NOT NULL,
    PRIMARY KEY (`cart_food_id`),
    INDEX `fk_cart_food_cart1_idx` (`cart_foodOrder` ASC),
    INDEX `fk_cart_food_food1_idx` (`food_Idfood` ASC),
... (17 lignes restantes)