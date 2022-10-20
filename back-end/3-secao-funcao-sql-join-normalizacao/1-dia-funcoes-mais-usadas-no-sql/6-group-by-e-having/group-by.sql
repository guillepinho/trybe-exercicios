-- SINTAXE
SELECT coluna(s) FROM tabela
  GROUP BY coluna(s);

SELECT first_name, COUNT(*) FROM sakila.actor
  GROUP BY first_name;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
  GROUP BY rating, rental_rate 
  ORDER BY rating, rental_rate;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;