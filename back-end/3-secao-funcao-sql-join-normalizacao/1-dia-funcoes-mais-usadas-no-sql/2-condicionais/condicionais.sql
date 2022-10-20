-- SINTAXE IF
SELECT IF (CONDICAO, VERDADEIRO, FALSO);

SELECT title,
  IF (rental_rate > 0.99, 'CARO', 'BARATO')
  AS 'preco'
  FROM sakila.film;

SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo')
  AS status
  FROM sakila.customer
  LIMIT 20;

-- SINTAXE CASE:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT title, rental_rate, 
  CASE
    WHEN rental_rate = 0.99 THEN 'BARATO'
    WHEN rental_rate = 2.99 THEN 'MÉDIO'
    WHEN rental_rate = 4.99 THEN 'CARO'
  ELSE 'NÃO CLASSIFICADO'
  END AS 'Preco'
  FROM sakila.film;

SELECT
  first_name,
  email,
  CASE
    WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
    WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
    WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
    ELSE 'não classificado'
  END AS valor
FROM sakila.customer
LIMIT 10;