-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `places`;
CREATE TABLE `places` (
  `uuid` varchar(36) NOT NULL,
  `name` int(11) NOT NULL,
  `latitude` decimal(8,6) NOT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `position` int(11) NOT NULL,
  `done` int(11) NOT NULL DEFAULT 0 COMMENT '1/0',
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `uuid` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `trips`;
CREATE TABLE `trips` (
  `uuid` varchar(36) NOT NULL,
  `name` varchar(64) NOT NULL,
  `position` int(11) NOT NULL,
  `year` int(4) NOT NULL,
  `done` int(1) NOT NULL DEFAULT 0 COMMENT '0/1',
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `uuid` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `trips_places`;
CREATE TABLE `trips_places` (
  `trip_uuid` varchar(36) NOT NULL,
  `place_uuid` varchar(36) NOT NULL,
  KEY `trip_uuid` (`trip_uuid`),
  KEY `place_uuid` (`place_uuid`),
  CONSTRAINT `trips_places_ibfk_1` FOREIGN KEY (`trip_uuid`) REFERENCES `trips` (`uuid`),
  CONSTRAINT `trips_places_ibfk_2` FOREIGN KEY (`place_uuid`) REFERENCES `places` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uuid` varchar(36) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(60) NOT NULL,
  `gender` int(1) NOT NULL COMMENT '1 = male, 2 = female',
  `role` int(1) NOT NULL COMMENT '1 = admin, 2 = user',
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `uuid` (`uuid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `users_trips`;
CREATE TABLE `users_trips` (
  `user_uuid` varchar(36) NOT NULL,
  `trip_uuid` varchar(36) NOT NULL,
  KEY `user_uuid` (`user_uuid`),
  KEY `trip_uuid` (`trip_uuid`),
  CONSTRAINT `users_trips_ibfk_1` FOREIGN KEY (`user_uuid`) REFERENCES `users` (`uuid`),
  CONSTRAINT `users_trips_ibfk_2` FOREIGN KEY (`trip_uuid`) REFERENCES `trips` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2021-11-24 23:18:10
