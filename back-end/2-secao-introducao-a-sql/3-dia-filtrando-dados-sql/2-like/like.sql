SELECT * FROM sakila.film
  WHERE title LIKE '%don';

SELECT * FROM sakila.film
  WHERE title LIKE '________'; -- filmes que possuem exatamente 8 caracteres

SELECT * FROM sakila.film
  WHERE title LIKE '_C%'; -- filmes que

SELECT * FROM sakila.film
  WHERE title LIKE 'E__%'; -- filmes que começam com E, que possuem no mínimo 3 caracteres

SELECT * FROM sakila.film
  WHERE title LIKE 'p%r'; -- filmes que começam com p, possuem um caracter qualquer, e a terceira letra é r

-- Coringas:
-- % representa 0, um ou multiplos caracteres
-- _ representa um único caracter