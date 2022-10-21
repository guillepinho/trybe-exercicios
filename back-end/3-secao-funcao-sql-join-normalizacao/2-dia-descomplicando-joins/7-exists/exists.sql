-- EXISTS Retornar os registros da tabela A que possuem um relacionamento com os registros da tabela B.

SELECT * FROM banco.tabela
  WHERE EXISTS (
    SELECT * FROM banco2.tabela2
    WHERE tabela1.coluna = tabela2.coluna2
  );