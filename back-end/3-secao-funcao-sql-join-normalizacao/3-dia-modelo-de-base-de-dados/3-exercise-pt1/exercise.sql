-- funcionario_id, nome, sobrenome, email, telefone, data_cadastro

-- funcionario_id 13 - tipo DATE

-- criar nova tabela de setores
-- setor_id - nome setor

-- criar tabela intermediaria para atender segunda norma
-- funcionario id - setor id

-- crie query para criar a database
DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;

CREATE TABLE funcionario(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL,
  sobrenome VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL,
  telefone VARCHAR(15),
  data_cadastro TIMESTAMP DEFAULT '2020-05-05 00:00:00'
) ENGINE=InnoDB;

CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE funcionario_setor(
	funcionario_id INT NOT NULL,
  setor_id INT NOT NULL,
  FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE=InnoDB;

INSERT INTO funcionario(nome, sobrenome, email, telefone, data_cadastro) VALUES
	('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
    
INSERT INTO funcionario(nome, sobrenome, email, telefone) VALUES
  ('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996');

INSERT INTO funcionario(nome, sobrenome, email, telefone, data_cadastro) VALUES
  ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
  ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO setor (nome) VALUES
	('Administração'), ('Vendas'), ('Operacional'), ('Estratégico'), ('Marketing');

INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES
	(1, 1),
  (1, 2),
  (2, 3),
  (3, 2),
  (3, 4),
  (4, 5);