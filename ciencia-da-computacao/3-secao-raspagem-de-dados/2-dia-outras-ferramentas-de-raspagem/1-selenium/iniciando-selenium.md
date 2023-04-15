docker pull selenium/standalone-firefox:106.0
docker run -d -p 4444:4444 -p 7900:7900 --shm-size 2g --name firefox selenium/standalone-firefox:106.0

 As flags utilizadas acima têm as seguintes finalidades:

        -d serve para rodar o container em segundo plano
        -p vincula uma porta do SO a outra porta dentro do container
        --shm-size aumenta o limite de quantidade de memória compartilhada com o container
        --name define qual vai ser o nome do container
        --platform (somente se utilizado) diz ao docker qual a plataforma deve ser usada

localhost:7900 - para verificar se está rodando ok

docker restart firefox