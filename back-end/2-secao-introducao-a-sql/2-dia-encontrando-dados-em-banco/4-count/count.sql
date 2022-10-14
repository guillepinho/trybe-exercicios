USE sakila;
SELECT COUNT(*) FROM actor;
SELECT COUNT(DISTINCT first_name) FROM actor;
SELECT COUNT(DISTINCT first_name, last_name) FROM actor;

SELECT COUNT(address2) FROM address;
SELECT COUNT(address2) FROM address WHERE address2 = '';
SELECT COUNT(district) FROM address WHERE district = 'Alberta';