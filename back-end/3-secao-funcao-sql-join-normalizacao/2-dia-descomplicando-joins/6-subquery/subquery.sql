-- SUBQUERY são query aninhadas em outra query, podendo conter expressões simples, mas não só, podendo usar praticamente todos os comandos já vistos

-- usando subquery como fonte de dados para FROM
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

-- preenchendo coluna de SELECT com uma subquery
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;

-- filtrando WHERE com subquery
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

-- utilizar tabela externa como uma tabela na consulta com o subquery
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

-- subquery poderiam substituir os joins
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;
-- vs
SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;