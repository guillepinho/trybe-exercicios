USE sakila;

-- 1 exercicio
SELECT * FROM film; -- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT title, release_year, rating FROM film; -- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT COUNT(*) FROM film; -- Quantos filmes temos cadastrados?

-- 2 exercicio
SELECT DISTINCT last_name FROM actor; -- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT COUNT(DISTINCT last_name) FROM actor; -- Quantos sobrenomes únicos temos na tabela?
SELECT * FROM actor ORDER BY last_name, first_name DESC; -- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

-- 3 exercicio
SELECT * FROM language WHERE NOT name = 'English'; -- Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM language LIMIT 5 OFFSET 1;

-- 4 exercicio
SELECT * FROM film; -- Selecione todos os dados da tabela. Pronto, fez isso?
SELECT title, release_year, length, rating, replacement_cost FROM film ORDER BY length DESC, replacement_cost LIMIT 20; --Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

--

SELECT * FROM movies WHERE year NOT BETWEEN 2000 AND 2010;     -- NOT BETWEEN
SELECT first, last FROM empinfo WHERE last LIKE '%ay';         -- ENDS WITH
SELECT * FROM empinfo WHERE first LIKE '%Mary%';               -- CONTAINS
SELECT name, ROUND(population / 1000000, 2), ROUND(GDP / 1000000000, 2) FROM world WHERE continent = 'South America'; -- ROUND
SELECT name, ROUND(GDP / population, -3) FROM world WHERE GDP >= 1000000000000; -- ROUND TO NEAREST 1000
SELECT name, capital FROM world WHERE LEFT(name, 1) = LEFT(capital, 1) AND name != capital; -- LEFT TO ISOLATE FIRST LETTER
SELECT name FROM world WHERE name LIKE '%a%' AND name LIKE '%e%' AND name LIKE '%i%' AND name LIKE '%o%' AND name LIKE '%u%' AND name NOT LIKE '% %' -- SELECTING ONLY VOWELS