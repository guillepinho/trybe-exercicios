- Typescript `-D typescript@4.4` 

Com isso conseguimos garantir que todas as pessoas que vão trabalhar nesse projeto estejam sempre executando uma mesma versão, evitando possíveis incompatibilidades, caso uma tenha uma versão diferente da outra.

- Types/Node `-D @types/node@16.11`

Módulos que não possuem nenhuma implementação de código, mas servem como uma camada que descreve a implementação JavaScript por trás dele através de tipos.

- Ts-Node `-D ts-node-dev@1.1`

Um pacote de utilitários que vai nos ajudar a executar o servidor de desenvolvimento, escrito em TypeScript, diretamente no terminal, sem necessidade de compilarmos o código em JavaScript, além de reiniciar o servidor a cada alteração que fizermos, sem a necessidade de encerrarmos o processo e o iniciarmos novamente.

- Express `express@4.17`

- Types/Express `-D @types/express@4.17`

- Middlewares de Erro `express-async-errors@3.1`

Lib que faz o tratamento de erros disparar diretamente o middleware de erro sem a necessidade de colocar try/catch ao longo do seu código.

- Restify `restify-errors@8.0 @types/restify-errors@4.3`

Disparar erros específicos para serem tratados no middleware de erro.