import math

# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior
# deles.


def bigger(intA, intB):
    if intA > intB:
        return intA
    else:
        return intB


print(f'O maior número entre 10 e 20 é: {bigger(10, 20)}')

# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

array = [10, 3, 6, 23, 11, 1]
divider = len(array)
totalSum = sum(array)
arithmeticAverage = totalSum / divider

print(f'A média aritmética da lista é de {arithmeticAverage}')

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por
# exemplo:
# 🦜Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' resulta
# em blablabla. Isso se aplica a listas também, caso você precise.


def asteriscs(number):
    for num in list(range(number)):
        print(number * '* ')


asteriscs(5)

# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o
# nome com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve
# ser "Fernanda".
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.


def biggestName(listOfNames):
    biggerName = listOfNames[0]
    for name in listOfNames:
        if len(name) >= len(biggerName):
            biggerName = name
    print(biggerName)


biggestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que
# custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e o preço total a
# partir do tamanho de uma parede (em m²).


coverage = 3
price = 80
size = 18
canCapacity = size * coverage


def cansAndPrice(square_meters):
    neededLiters = square_meters / coverage
    neededCans = math.ceil(neededLiters / size)
    priceToPay = neededCans * price
    answer = (neededCans, priceToPay)
    return print(f'A quantidade necessária de de latas de tinta e preço \n\
                  é:{answer}')


cansAndPrice(12)
cansAndPrice(120)


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.


def isItTriangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


print(isItTriangle(10, 10, 10))
print(isItTriangle(10, 10, 13))
print(isItTriangle(13, 12, 10))
print(isItTriangle(13, 12, 1))
