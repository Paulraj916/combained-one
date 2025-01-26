CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  status ENUM('pending', 'completed') DEFAULT 'pending'
);

select * from todos;