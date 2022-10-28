### 1 - Qual é a função de status 400 e 422?
- **400**: Bad Request - O pedido feito ao servidor não pode ser processado, porque algo está errado no lado do cliente (sintaxe de requisição errada, por exemplo, enquadramento de mensagem de requisição inválida ou requisição de roteamento enganosa).
- **422**: Unprocessable Entity - O pedido é compreendido pelo servidor, o conteúdo e a mensagem estão ok, porém não é possível processar as instruções presentes por erro semântico.

### 2 - Qual é a função do código de status 401?
- **401**: Unauthorized - a solicitação não possui credenciais de autenticação válidas para o recurso de destino.