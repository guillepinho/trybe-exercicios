SELECT * FROM sakila.actor
  WHERE first_name = 'PENELOPE'
  OR first_name = 'NICK'
  OR first_name = 'ED'
  OR first_name = 'JENNIFER'; -- é possível informar uma 'array' ao invés de digitar tantos OR

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER'); -- o IN faz isso, indica uma array e verifica se alguma das condições descritas são verdadeiras