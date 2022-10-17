-- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
SELECT * FROM scientists
	WHERE name LIKE '%e%';

-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.
SELECT * FROM projects
	WHERE code LIKE 'a%'
    ORDER BY name;

-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
SELECT code, name FROM projects
	WHERE code LIKE '%3%'
    ORDER BY name;

-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT * FROM assignedto
	WHERE project IN ('AeH3', 'Ast3', 'Che1');

-- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM projects
	WHERE hours > 500;

-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM projects
	WHERE hours BETWEEN 250 AND 500;

-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letre A .
SELECT * FROM projects
	WHERE name NOT LIKE 'a%';

-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT * FROM projects
	WHERE name NOT LIKE '%h%';