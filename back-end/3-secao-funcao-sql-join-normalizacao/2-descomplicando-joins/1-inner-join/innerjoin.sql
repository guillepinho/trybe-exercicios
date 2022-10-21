-- SINTAXE
SELECT t1.coluna, t2.coluna
  FROM tabela1 AS t1
  INNER JOIN tabela2 AS t2
  ON t1.coluna_em_comum = t2.coluna_em_comum;

-- O AS PODE SER OMITIDO
SELECT a.first_name, a.actor_id, f.actor_id
  FROM sakila.actor a
  INNER JOIN sakila.film_actor f
  ON a.actor_id = f.actor_id;

SELECT cities.city, cities.country_id, countries.country
	FROM sakila.city AS cities
  INNER JOIN sakila.country AS countries
	ON cities.country_id = countries.country_id;

SELECT f.title, f.language_id, l.name
	FROM sakila.film AS f
	INNER JOIN sakila.language AS l
  ON f.language_id = l.language_id;