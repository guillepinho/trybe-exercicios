DROP DATABASE IF EXISTS zoo;
CREATE DATABASE zoo;
USE zoo;

CREATE TABLE animal(
	id_animal INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    specie VARCHAR(50) NOT NULL,
    sex VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    location VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE manager(
	id_manager INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE caretaker(
	id_caretaker INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    manager INT NOT NULL,
    FOREIGN KEY (manager) REFERENCES manager(id_manager)
) ENGINE=InnoDB;

CREATE TABLE animal_caretaker(
	caretaker INT NOT NULL,
    animal INT NOT NULL,
    CONSTRAINT PRIMARY KEY (caretaker, animal),
    FOREIGN KEY (caretaker) REFERENCES caretaker(id_caretaker),
    FOREIGN KEY (animal) REFERENCES animal(id_animal)
) ENGINE=InnoDB;