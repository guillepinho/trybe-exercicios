[Normalização](https://learn.microsoft.com/pt-br/office/troubleshoot/access/database-normalization-description#normalizing-an-example-table)

# Primeira Forma Normal

A ideia é criar tabelas escaláveis, isto é, preparada para receber grandes quantidades de dados e devem também ser extensíveis, as mudanças não podem quebrar a integridade dos dados.

- Colunas devem possuir apenas um valor;
- Valores em uma coluna devem ser do mesmo tipo de dados;
- Cada coluna deve possuir um nome único;
- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.

# Segunda Forma Normal

- A tabela deve estar na 1ª Forma Normal;
- A tabela não deve possuir dependências parciais.

Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir. Por exemplo, uma coluan de curso para uma primary key de id de estudante, é parcial e poderia ser alocada em outra tabela.

A dependência funcional é aquela que os dados das colunas dependem exclusivamente do primary key, de maneira que sem eles, não seria possível identificar qual o elemento.

# Terceira Forma Normal

- A tabela deve estar na 1ª e 2ª Formas Normais;
- A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).
