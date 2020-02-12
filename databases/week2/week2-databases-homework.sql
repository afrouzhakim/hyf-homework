Part 1: Working with tasks
Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task 
(title, description, created, updated, due_date, status_id, user_id) 
values 
('listening audio book', 'learning Danish during physical working', '2020-02-07 05:00:00', '2020-02-07 10:00:00', '2020-02-07 12:00:00', 2, 1);
Change the title of a task
update task set title = 'listening to et liv en tid book' where id = 36;
Change a task due date
update task set due_date = '2020-01-07 12:00:00' where id = 36;
Change a task status
update task set status_id = 1 where id = 36;
Mark a task as complete
update task set status_id = 3 where id = 36;
Delete a task
delete from task where id = 36;
select count(*), created from task group by month (10);


Part 2: School database
CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) 
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

Part 3: More queries
Get all the tasks assigned to users whose email ends in @spotify.com
select * from 
user join user_task on 
user.id = user_task.user_id
join task on
task.id = user_task.task_id
where user.email like '%@spotify.com';

Get all the tasks for 'Donald Duck' with status 'Not started'
select * from 
user join user_task on user.id = user_task.user_id
join task on task.id = user_task.task_id
join status on task.status_id = status.id
where user.name like '%Donald Duck%' and status.name = 'Not started';

Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select * from user 
join user_task on user.id = user_task.user_id
join task on task.id = user_task.task_id
where user.name like '%Maryrose Meadows%';

Part 4: Meal application
create table `meal` (
`id` int(10) unsigned not null auto_increment primary key,
`title` varchar(255) not null,
`description` text not null,
`location` varchar(255) not null,
`when` datetime not null,
`max_reservations` int(10) unsigned not null,
`price` decimal(6,4) ,
`created_date` date not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table `reservation` (
`id` int(10) unsigned not null auto_increment primary key,
`number_of_guests` int(10) unsigned not null,
`meal_id` int(10) unsigned not null,
`created_date` date not null,
  constraint `fk_meal` foreign key (`meal_id`) references `meal` (`id`) on delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table `review` (
`id` int(10) unsigned not null auto_increment primary key,
`title` varchar(255) not null,
`description` text null,
`meal_id` int(10) unsigned not null,
`stars` int(5) unsigned null,
  constraint `fk_meal_review` foreign key (`meal_id`) references `meal` (`id`) on delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

