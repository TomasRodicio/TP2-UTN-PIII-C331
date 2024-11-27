CREATE DATABASE cine;

USE cine;

CREATE TABLE directores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    name VARCHAR(45),
    surname VARCHAR(45)
);

CREATE TABLE peliculas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45),
    directorID INT,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    categorie VARCHAR(45),
    status ENUM('active', 'inactive'),
    FOREIGN KEY (directorID) REFERENCES directores(id)
)