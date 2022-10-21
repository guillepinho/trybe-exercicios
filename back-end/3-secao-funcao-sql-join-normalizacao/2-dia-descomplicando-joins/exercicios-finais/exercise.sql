-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM staff
	UNION ALL
SELECT first_name, last_name FROM actor;

-- Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contêm a palavra “tracy” na tabela customer e os que contêm “je” na tabela actor. Exiba apenas os resultados únicos.
SELECT first_name FROM customer WHERE first_name LIKE '%tracy%'
	UNION
SELECT first_name FROM actor WHERE first_name LIKE '%je%';
	 
-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.


-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.



-- BD HR E PRATICANDO
-- Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.


-- Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra “lost” no título.


-- Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.


-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.


-- BD PIXAR


-- Exercício 1: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

-- Exercício 5: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.

-- Exercício 6: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
