-- Meal Application
-- CREATE DATABASE meal_application_data; 
SET NAMES utf8mb4;
USE meal_application_data; 

CREATE TABLE `meal` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL, 
`location` varchar(255) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` int(10) unsigned NOT NULL,
`price` DECIMAL(5,2) NOT NULL,                     
`created_date` DATE NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` int(10) unsigned NOT NULL,
`meal_id` int(10) unsigned NOT NULL,
`created_date` DATE NOT NULL,
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`meal_id` int(10) unsigned NOT NULL,
`stars` int(5) unsigned NULL,
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert data to meal table
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date )
VALUES (1, 'chili con carne',  'very hot!', 'Kastrup', '2020-02-14 20:00:00', 20, 00085.99, '2020-01-01 08:00:00');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date )
VALUES (2, 'burger',  'fresh meat!', 'Copenhagen', '20-02-14 20:00:00', 35, 00075.99, '2018-01-01 08:00:00');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date )
VALUES (3, 'pasta',  'with fresh chease!', 'Søborg', '20-02-14 20:00:00', 30, 00065.99, '2017-01-01 08:00:00');
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date )
VALUES (4, 'pizza', 'Italian!', 'Lyngby', '20-02-14 20:00:00', 15, 00070.99, '2015-01-01 08:00:00');

-- Insert data to reservation table
INSERT INTO reservation (id, number_of_guests, meal_id, created_date) 
VALUES (1, 15, 2, '2020-01-01 12:00:00');  
INSERT INTO reservation (id, number_of_guests, meal_id, created_date) 
VALUES (2, 5, 4, '2020-01-01 15:00:00');  
INSERT INTO reservation (id, number_of_guests, meal_id, created_date) 
VALUES (3, 10, 1, '2020-01-01 16:00:00');  

-- Insert data to review table
INSERT INTO review (id, title, description, meal_id, stars) 
VALUES (1, 'fire!', 'It was too hot! too much chili', 1, 4);
INSERT INTO review (id, title, description, meal_id, stars) 
VALUES (2, 'wow!', 'A lot of chease on that! I love it!', 3, 5);
INSERT INTO review (id, title, description, meal_id, stars) 
VALUES (3, 'Ausume!', 'very thin crost', 4, 5);
 SELECT * FROM review;