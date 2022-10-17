SELECT title, length FROM sakila.film
  WHERE length BETWEEN 50 AND 120;
-- O BETWEEN pode encontrar valores entre eles (inclui o valor inicial e o final nos resultados)
-- o BETWEEN com strings encontrará faixa de valores entre
-- BETWEEN pode ser usado com datas também

SELECT rental_id, rental_date FROM sakila.rental
  WHERE rental_date BETWEEN '2005-05-27' AND '2005-07-17';