-- CREATE DATABASE restaurant_db;  
SET NAMES utf8mb4;
use restaurant_db;

CREATE TABLE `staff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `age` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `title` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `salary` int(10) NOT NULL,
  `duty` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `gift` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `amount` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `staff_title` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `staff_id` int(10) unsigned NOT NULL,
  `title_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_staffid_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_titleid_title` FOREIGN KEY (`title_id`) REFERENCES `title` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

CREATE TABLE `gift_title` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `gift_id` int(10) unsigned NOT NULL,
  `title_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_giftid` FOREIGN KEY (`gift_id`) REFERENCES `gift` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_titleid` FOREIGN KEY (`title_id`) REFERENCES `title` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 



INSERT INTO staff (id, name, gender, age)
VALUES (1, 'william', 'male', 23);
INSERT INTO staff (id, name, gender, age)
VALUES (2, 'kasper', 'male', 34);
INSERT INTO staff (id, name, gender, age)
VALUES (3, 'brite', 'female', 35);
INSERT INTO staff (id, name, gender, age)
VALUES (4, 'ali', 'male', 30);
INSERT INTO staff (id, name, gender, age)
VALUES (5, 'anne', 'female', 22);
INSERT INTO staff (id, name, gender, age)
VALUES (6, 'adrian', 'male', 27);
INSERT INTO staff (id, name, gender, age)
VALUES (7, 'reza', 'male', 30);
INSERT INTO staff (id, name, gender, age)
VALUES (8, 'anne', 'female', 23);


INSERT INTO title (id, title, salary, duty)
VALUES (1, 'cachier', 25000 , 'recieving money');
INSERT INTO title (id, title, salary, duty)
VALUES (2, 'waiter', 20000 , 'getting order');
INSERT INTO title (id, title, salary, duty)
VALUES (3, 'kitchen assistant', 18000 , 'preparing food');
INSERT INTO title (id, title, salary, duty)
VALUES (4, 'chef', 30000 , 'making food');
INSERT INTO title (id, title, salary, duty)
VALUES (5, 'claning assistant', 15000 , 'cleaning');
INSERT INTO title (id, title, salary, duty)
VALUES (6, 'manager', 35000 , 'management');

INSERT INTO gift (id, amount)
VALUES (1, 1000);
INSERT INTO gift (id, amount)
VALUES (2, 2000);
INSERT INTO gift (id, amount)
VALUES (3, 3000);
INSERT INTO gift (id, amount)
VALUES (4, 4000);
INSERT INTO gift (id, amount)
VALUES (5, 5000);


INSERT INTO staff_title (id, staff_id, title_id)
VALUES (1, 2, 6);
INSERT INTO staff_title (id, staff_id, title_id)
VALUES (2, 2, 1);
INSERT INTO staff_title (id, staff_id, title_id)
VALUES (3, 8, 2);
INSERT INTO staff_title (id, staff_id, title_id)
VALUES (4, 8, 3);
INSERT INTO staff_title (id, staff_id, title_id)
VALUES (5, 8, 5);



INSERT INTO gift_title (id, gift_id, title_id)
VALUES (1, 1, 5);
INSERT INTO gift_title (id, gift_id, title_id)
VALUES (2, 1, 3);
INSERT INTO gift_title (id, gift_id, title_id)
VALUES (3, 3, 1);
INSERT INTO gift_title (id, gift_id, title_id)
VALUES (4, 3, 2);


select * from gift_title;