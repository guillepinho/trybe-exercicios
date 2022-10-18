-- Insira um novo funcionário na tabela sakila.staff.
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
	VALUES ('Guilherme', 'Pinho', 3, 'gpinho.dev@gmail.com', 2, 1, 'gpinho', '123456ccdd');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
	('Gabriela', 'Pinho', 3, 'gabrielapinho@gmail.com', 2, 1, 'gabbi', '123456ccdd'),
	('Bernardo', 'Pinho', 3, 'bernardinho@gmail.com', 2, 1, 'bpinho', '123456ccdd');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
	SELECT first_name, last_name
    FROM customer
    WHERE customer_id BETWEEN 1 AND 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (name) VALUES
	('War'),
    ('Knight Tales'),
    ('Adventure');

-- Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store (manager_staff_id, address_id)
	SELECT staff_id, address_id
    FROM staff
    WHERE staff_id = 3;
