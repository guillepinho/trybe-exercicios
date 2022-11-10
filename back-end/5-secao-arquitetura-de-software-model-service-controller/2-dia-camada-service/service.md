# Service

É a camada responsável por guardar as regras de negócios, as regras da aplicação, que não dependem de framework, banco de dados, nem de nenhum agente externo, são regras intrínsecas ao nosso sistema.

São protegidas, o model protege o service do banco de dados, da mesma maneira que o controller é uma barreira que protege o service do cliente. O service apenas determina as validações, as regras do negócio, independente do resto da aplicação, facilitando a alteração das regras ou dos agentes externos, sem afetar o serviço/regra de negócio.

---

### Regra de Negócio

São as validações e definições de processos que uma aplicação deve seguir para que seja realizada a tarefa determinada para o sistema, isto é, **a regra de negócio diz respeito a como o programa deve realizar sua função principal**.

 Essas verificações podem ser divididas em dois tipos:

- <mark>Regras de negócio simples</mark>: são regras como “não é possível cadastrar um produto que o nome tenha menos de cinco letras” ou “não é possível cadastrar um produto que já exista” ou “só é permitido listar todos os usuários sendo administrador”.

- <mark>Regras de negócio complexas</mark>: são regras como “só é possível vender produtos que tenham estoque” ou “não é permitido parcelar compras em mais de 5x para valores abaixo de R$ 100,00”.