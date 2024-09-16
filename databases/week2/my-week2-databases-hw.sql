Change a task due date
update task set due_date = '2020-01-07 12:00:00' where id = 36;
Change a task status
update task set status_id = 1 where id = 36;
Mark a task as complete
update task set status_id = 3 where id = 36;
Delete a task
delete from task where id = 36;


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
