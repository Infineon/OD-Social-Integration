CREATE DATABASE `onlinedocumentation-social` 
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ 
/*!80016 DEFAULT ENCRYPTION='N' */;
USE `onlinedocumentation-social` ;
CREATE TABLE `messages` (
  `messageid` int NOT NULL AUTO_INCREMENT,
  `messagetext` varchar(45) NOT NULL,
  `messagedate` datetime DEFAULT NULL,
  PRIMARY KEY (`messageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `page` (
  `pageid` int NOT NULL AUTO_INCREMENT,
  `pageurl` varchar(45) DEFAULT NULL,
  `pagecol` varchar(45) NOT NULL,
  PRIMARY KEY (`pageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `userid` int NOT NULL,
  `useremail` varchar(45) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='master';

CREATE TABLE `page-message-user` (
  `page-message-userid` int NOT NULL,
  `pageid` int NOT NULL,
  `messgeid` int NOT NULL,
  `userid` int NOT NULL,
  PRIMARY KEY (`page-message-userid`),
  UNIQUE KEY `page-message-user_id_UNIQUE` (`page-message-userid`),
  KEY `fkpage_idx` (`pageid`),
  KEY `fkuser_idx` (`userid`),
  KEY `fkmessage_idx` (`messgeid`),
  CONSTRAINT `fkmessage` FOREIGN KEY (`messgeid`) REFERENCES `messages` (`messageid`),
  CONSTRAINT `fkpage` FOREIGN KEY (`pageid`) REFERENCES `page` (`pageid`),
  CONSTRAINT `fkuser` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

//NOTE - Added socialIds for messagers and users to map iDs with corrospoinding Khoros iDs
ALTER TABLE `onlinedocumentation-social`.`messages` 
ADD COLUMN `messagesocialid` INT NOT NULL AFTER `messageid`,
CHANGE COLUMN `messagedate` `messagedate` DATETIME NOT NULL ;

ALTER TABLE `onlinedocumentation-social`.`user` 
ADD COLUMN `usersocialid` INT NOT NULL AFTER `userid` ;