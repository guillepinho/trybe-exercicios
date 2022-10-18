-- IMPORTANTE!
-- Backticks ou crase (``) são usadas para identificar tabelas e colunas, quando for palavra reservada do MySQL ou quando a tabela ou coluna conter espaços em branco. Só usar quando for absolutamente necessário.
-- Aspas simples ('') são usadas para valores string.

INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');

INSERT IGNORE -- para ignorar e pular dados problemáticos que normalmente interromperiam a query

INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;

-- Inserindo valores em coluna com auto_increment, ela fica omitida no insert e é gerada automaticamente
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');

-- é possível inserir dados de outra tabela:
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;