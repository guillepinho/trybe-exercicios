-- UNION une os dados e apaga os repetidos
SELECT * FROM tabela
  UNION
SELECT * FROM tabela2

-- UNION ALL une os dados e mantém os repetidos
SELECT * FROM tabela
  UNION ALL
SELECT * FROM tabela2

-- se as colunas das tabelas selecionadas tiverem comprimentos diferentes, dará erro. Para garantir que a ordenação está sendo feita a partir da ordenaçaõ das duas, os selects devem ser colocados em parenteses
(SELECT title, desc, '-' AS customer_id FROM tabela
  UNION ALL
SELECT title, desc, customer_id FROM tabela2)
  ORDER BY title;

-- para paginar e indexar, como uma loja online, usamos o offset
(SELECT title, desc, '-' AS customer_id FROM tabela LIMIT 20
  UNION ALL
SELECT title, desc, customer_id FROM tabela2 LIMIT 20)
  ORDER BY title LIMIT 10;

(SELECT title, desc, '-' AS customer_id FROM tabela LIMIT 20
  UNION ALL
SELECT title, desc, customer_id FROM tabela2 LIMIT 20)
  ORDER BY title LIMIT 10 OFFSET 10;