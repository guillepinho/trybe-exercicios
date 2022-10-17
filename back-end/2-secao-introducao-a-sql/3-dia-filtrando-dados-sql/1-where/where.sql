USE sakila;
SELECT * FROM actor
	WHERE actor_id = 101;
    
SELECT * FROM film
	WHERE length < 50 -- Filme que o length seja menor que 50
    ORDER BY length; -- Ordenado pelo length asc

SELECT * FROM film
	WHERE title <> 'ALIEN CENTER' -- Título seja diferente de ALIEN CENTER
    AND replacement_cost > 20; -- E replacement_cost maior que 20

SELECT * FROM film
	WHERE rating = 'G' -- Que o rating seja G
    OR rating = 'PG' -- Ou PG
    OR rating = 'PG-13'; -- Ou PG-13, devolvendo só os filmes para menores de idade
    
SELECT * FROM rental
	WHERE return_date IS null; -- retorna os filmes que não possuem return_date, ou seja, não foram devolvidos

SELECT * FROM staff
	WHERE active IS true; -- pode ser true ou 1, será a mesma coisa, para encontrar os funcionários ativos

SELECT * FROM staff
	WHERE active IS NOT true; -- seria a negativa do true, ou false, ou 0
    
SELECT * FROM address
	WHERE address2 IS NOT null; -- puxa os registros que não vieram nulo (diferente de vazio)

SELECT * FROM film
	WHERE title NOT LIKE 'academy%'; -- todos os filmes que não começam com a palavra academy, o like compara a string e o % é o coringa

SELECT * FROM sakila.payment
	WHERE DATE(payment_date) = '2005-07-31'; -- procurando pela data, apenas, excluindo a hora, se colocassemos sem o DATE(), teríamos que especificar a hora também, já que ela também é registrada no sakila

SELECT * FROM sakila.payment
	WHERE payment_date LIKE '2005-07-31%'; -- também podemos buscar por valores aproximados, com o LIKE

-- Lembrar que existe uma ordem de prioridade na execução de operadores: (), */, +-, NOT, AND, OR.
-- Então, executar WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2 poderia ter o efeito indesejado
-- Já que primeiro seria executado "amount = 2.00 AND staff_id = 2", para depois executar o "amount = 0.99 OR"
-- O ideal seria executar "WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2", que alteraria a ordem e o resultado desejado.