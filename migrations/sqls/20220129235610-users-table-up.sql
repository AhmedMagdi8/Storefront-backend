CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username varchar(100) not null,
    firstname VARCHAR(100) not null,
    lastname VARCHAR(100) not null,
    password VARCHAR not null);