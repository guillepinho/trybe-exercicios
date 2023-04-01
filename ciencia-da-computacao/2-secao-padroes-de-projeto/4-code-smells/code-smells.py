from dataclasses import dataclass


class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))


@dataclass
class Address:
    # Podemos colocar um valor padrão
    street = "Street"
    number = 0
    # Ou especificar o tipo do campo com anotações de tipo
    district: str


address = Address(district="District")

print(address.street, address.number, address.district)
# Street 0 District


from collections import namedtuple

# Definimos a tupla nomeada passando o nome dela e uma lista com os nomes dos
# atributos
Address = namedtuple("Address", ["street", "number", "district"])

# Criamos "instâncias" da tupla tal como criamos instâncias de classes normais
address1 = Address("Street", 0, "District")
# Podemos nomear os parâmetros para passá-los fora de ordem
address2 = Address("Street2", district="District2", number=1)

# Podemos acessar utilizando a sintaxe `objeto.atributo`
print(address1.street, address1.number, address1.district)
# Street 0 District

# Observe que o acesso por índice numérico ainda funciona, pois são tuplas
print(address1[0], address1[1], address1[2])
# Street 0 District

address1.district = "Aloha"  # ! AttributeError, pois tuplas são imutáveis
