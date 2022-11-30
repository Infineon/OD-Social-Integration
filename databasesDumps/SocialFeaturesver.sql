CREATE DATABASE `onlinedocumentation-social` 
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ 
/*!80016 DEFAULT ENCRYPTION='N' */;
USE `onlinedocumentation-social` ;
UPDATE `onlinedocumentation-social`.`messages`
SET
`messageid` = <{messageid: }>,
`messagesocialid` = <{messagesocialid: }>,
`messagetext` = <{messagetext: }>,
`messagedate` = <{messagedate: }>
WHERE `messageid` = <{expr}>;

UPDATE `onlinedocumentation-social`.`page`
SET
`pageid` = <{pageid: }>,
`pageurl` = <{pageurl: }>,
`pagecol` = <{pagecol: }>
WHERE `pageid` = <{expr}>;

UPDATE `onlinedocumentation-social`.`page-message-user`
SET
`page-message-userid` = <{page-message-userid: }>,
`pageid` = <{pageid: }>,
`messgeid` = <{messgeid: }>,
`userid` = <{userid: }>
WHERE `page-message-userid` = <{expr}>;

UPDATE `onlinedocumentation-social`.`user`
SET
`userid` = <{userid: }>,
`useremail` = <{useremail: }>,
`username` = <{username: }>,
`usersocialid` = <{usersocialid: }>
WHERE `userid` = <{expr}>;
CREATE TABLE `messages` (
  `messageid` int NOT NULL AUTO_INCREMENT,
  `messagesocialid` int NOT NULL,
  `messagetext` varchar(45) NOT NULL,
  `messagedate` datetime NOT NULL,
  PRIMARY KEY (`messageid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `page` (
  `pageid` int NOT NULL AUTO_INCREMENT,
  `pageurl` varchar(45) DEFAULT NULL,
  `pagecol` varchar(45) NOT NULL,
  PRIMARY KEY (`pageid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `useremail` varchar(45) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `usersocialid` int DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='master';
CREATE TABLE `page-message-user` (
  `page-message-userid` int NOT NULL AUTO_INCREMENT,
  `pageid` int NOT NULL,
  `messgeid` int NOT NULL,
  `userid` int NOT NULL,
  PRIMARY KEY (`page-message-userid`),
  UNIQUE KEY `page-message-user_id_UNIQUE` (`page-message-userid`),
  KEY `fkpage_idx` (`pageid`),
  KEY `fkmessage_idx` (`messgeid`),
  KEY `fkuser_idx` (`userid`),
  CONSTRAINT `fkmessage` FOREIGN KEY (`messgeid`) REFERENCES `messages` (`messageid`),
  CONSTRAINT `fkpage` FOREIGN KEY (`pageid`) REFERENCES `page` (`pageid`),
  CONSTRAINT `fkuser` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
