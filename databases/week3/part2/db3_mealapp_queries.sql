USE meal_application_data; 
-- Get all meals
SELECT * FROM meal; 

-- Add a new meal
INSERT INTO meal (id, title, description, location, `when`, max_reservations, price, created_date )
VALUES (5, 'stek',  'very fresh meat!', 'Kastrup', '2020-02-14 20:00:00', 20, 00120.99, '2020-01-01 08:00:00');

-- Get a meal with any id, fx 1
select * FROM meal where meal.id = 1; 

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal set location = 'Amarger' where id = 5;  
select * from meal where id = 5;

-- Delete a meal with any id, fx 1
delete from meal where id = 5;     
select * from meal;   

-- Get all reservations
select * from reservation;

-- Add a new reservation
insert into reservation (id, number_of_guests, meal_id, created_date ) 
values (4, 12, 1,'2020-02-15 21:00:00');
select * from reservation;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set meal_id = 3 where id = 1;  
select * from reservation where id = 1;

-- Delete a reservation with any id, fx 1
delete from reservation where id = 1;     
select * from reservation;

-- Get all reviews
select * from review;

-- Add a new review
insert into review (id, title, description, meal_id, stars ) 
values (5, 'bad!', 'too much fat on meat and over cooked!', 2, 4); 
select * from review;

-- Get a review with any id, fx 1
select * from review where id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review set title = 'not good!' where id = 5;  
SELECT * FROM review;

-- Delete a review with any id, fx 1
delete from review where id = 5;     
select * from review; 

-- Get meals that has a price smaller than a specific price fx 90
select meal.title as `title`, meal.price as `price` from meal where meal.price < 00075.99; 

-- Get meals that still has available reservations
select meal.title as `title`, meal.max_reservations as `max_reservations`, reservation.number_of_guests as `number_of_guests`
from reservation join meal on reservation.meal_id = meal.id
where reservation.number_of_guests < meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select meal.id as `id`, meal.title as `title`, meal.price as `price` from meal where title like '%chili%';

-- Get meals that has been created between two dates
select * from meal where day (created_date) between 1 and 10;

-- Get only specific number of meals fx return only 5 meals
select * from meal limit 2;

-- Get the meals that have good reviews
select meal.title as `title`,  review.stars AS `stars`
from meal join review on meal.id = review.meal_id where review.stars > 4;

-- Get reservations for a specific meal sorted by created_date

-- Sort all meals by average number of stars in the reviews

