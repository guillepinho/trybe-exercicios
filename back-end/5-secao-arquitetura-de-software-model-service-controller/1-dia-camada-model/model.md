# Model

É uma das camadas do MSC. É responsável pelo acesso (leitura e escruta) e pela modelagem dos dados.

---

### Acesso

Se alguma parte do sistema precisa criar o usuário ou ver o usuário, etc, tem que passar pela camada de model. Se o Service quiser acessar ou escrever algum dado, vai precisar de usar algum dos métodos (funções) fornecidos pela camada de model.

Portanto é uma camada que protege o banco de dados, e ninguém precisa lidar diretamente com o banco, só essa camada, criando o desacoplamento. Pode acessar dados de qualquer lugar, seja mongo, JSON, etc. e o resto do código desconhece.

---

### Modelagem

Define a padronização das entidades, ou até transforma-los caso faça sentido.

Se por exemplo vier o dado em algum formato um pouco diferente, por exemplo `client_id` (snake_case) quando meu código utiliza a formatação em camelCase (`clientId`), vai ser essa camada quem irá formatar e transformar os dados, para garantir que irão com formatação correta.