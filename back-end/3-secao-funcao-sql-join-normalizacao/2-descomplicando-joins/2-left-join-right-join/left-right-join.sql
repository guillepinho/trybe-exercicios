-- SINTAXE
SELECT t1.coluna, t2.coluna
  FROM tabela1 AS t1
  LEFT JOIN tabela2 AS t2
  ON t1.coluna_em_comum = t2.coluna_em_comum;

SELECT t1.coluna, t2.coluna
  FROM tabela1 AS t1
  RIGHT JOIN tabela2 AS t2
  ON t1.coluna_em_comum = t2.coluna_em_comum;

-- O left join monta a tabela de acordo com as informações da t1, e complementa com as que houveram em comum da t2
-- o right faz o contrário, monta a partir da t2 e complementa com as que houverem em comum da t1