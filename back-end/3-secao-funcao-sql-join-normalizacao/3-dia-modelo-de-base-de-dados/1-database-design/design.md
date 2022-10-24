# Como modelar?

- **Identificar as entidades, atributos e relacionamentos** com base na descrição do problema: Por exemplo, a entidade álbum possui os atributos título e preço e se relaciona com a entidade artista.

- **Construir um diagrama entidade-relacionamento** para representar as entidades encontradas no passo 1: O diagrama serve como um guia para que você possa visualizar as entidades (tabelas) que irão se relacionar.

- **Criar um banco de dados para conter suas tabelas**: Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar início a criação dele.

- **Criar e relacionar tabelas tendo o diagrama** do passo 2 como base: Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.

# Identificando entidades, atributos e relacionamentos

- **Entidades**: São uma representação de algo do mundo real dentro do banco de dados e que normalmente englobam toda uma ideia. São armazenadas em formato de tabelas em um banco de dados.

*Exemplo: Albúm, Artista, Categoria, Música*

- **Atributos**: Um atributo é tudo aquilo que pode ser usado para descrever algo. Por exemplo, uma entidade pessoa pode ter nome, altura, peso e idade como atributos.

*Exemplo:*
- *Albúm: id, nome, ano_de_lançamento, categoria, artista*
- *Artista: id, nome*
- *Categoria: id, nome*
- *Música: id, nome, artista, album, ano_de_lançamento, categoria*

- **Relacionamentos**: Os relacionamentos servem para representar como uma entidade deve estar ligada com outra(s) no banco de dados. Há três tipos de relacionamentos possíveis em um banco de dados, são eles: 1:1, 1:n, n:n.

*Exemplo:*
- *Albúm: categoria n:n (Categoria + Música)*
- *Artista: nome 1:1 Albúm*

# Construindo um diagrama entidade-relacionamento

Construir um diagrama simples para representar as entidades encontradas no passo 1.

Agora é preciso montar um diagrama de relacionamento básico que demonstra como uma entidade é relacionada com a outra, usando o modelo EntidadeA + verbo + EntidadeB.

[Diagrama Simples](./relacionamentos.png)

# Montando um diagrama mais detalhado

Para diagramas ER (entidade-relacionamento) mais detalhados, deve-se incluir o nome das tabelas, suas chaves primárias e estrangeiras, suas colunas e seus relacionamentos.

[Diagrama](./diagrama.png)

# Criando o Banco de Dados

[database](./albumdb.sql)