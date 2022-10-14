USE sakila;
SELECT DISTINCT first_name, last_name FROM actor; -- 199 returned
SELECT DISTINCT first_name FROM actor; -- 128 returned

-- Dados não são apagados! Apenas não são exibidos no query