# REST no Express

 De modo geral, os princípios devem ser seguidos independente da tecnologia que utilizamos na implementação de nossa API. Ela pode ser escrita em Node.js, Python, Perl, Java, entre outras.

Uma das vantagens de se usar o Express para construção de APIs é a organização das rotas, podendo separar as rotas pelo método (ou verbo) HTTP da requisição. Além disso, torna-se mais simples retornar um formato específico solicitado pelo cliente e/ou retornar um status HTTP.

```
app.get(...)
app.post(...)
app.put(...)
app.delete(...)
```

Esse é o pulo do gato! Durante a explicação do conteúdo usamos a arquitetura REST em nossa API! 😮

A forma como você aprendeu a fazer APIs hoje já é RESTful! Contudo, se tornar especialista em RESTful e saber analisar APIs para ver se respeitam o padrão não é nosso propósito aqui. Basta saber que existem requisições que definem boas práticas para criações de alguns tipos de API.