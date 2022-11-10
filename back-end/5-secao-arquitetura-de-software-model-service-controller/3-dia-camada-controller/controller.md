# Controller

É a camada responsável que se comunica com o mundo exterior, recebe a requisição, aguarda o processamento, e retorna a resposta ao cliente, protegendo o restante da aplicação das informações passadas.

O controller verifica as informações, os headers, o body e os parâmetros, verificando tudo que é necessário para a operação. Ele extrai essas informações e coloca em uma estrutura agnóstica (não sabe em que ambiente está), transforma a requisição em um objeto que tem tudo que é necessário.

Os inputs nem sempre veem corretos, então o controller valida se a estrutura da mensagem também é a adequada, não envolvendo as regras de negócio.