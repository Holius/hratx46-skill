DROP DATABASE IF EXISTS heroku_7c77d5ad4c092b8;

CREATE DATABASE heroku_7c77d5ad4c092b8;

USE heroku_7c77d5ad4c092b8;

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message text,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),
    viewed tinyint,
    user_a VARCHAR(255),
    user_b VARCHAR(255),
    FOREIGN KEY (user_a) REFERENCES users(username),
    FOREIGN KEY (user_b) REFERENCES users(username)
);

CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
);
