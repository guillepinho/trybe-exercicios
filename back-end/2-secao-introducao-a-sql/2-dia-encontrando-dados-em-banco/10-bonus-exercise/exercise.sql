-- PART 1
USE PiecesProviders;
--    Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT piece, price FROM Provides WHERE provider = 'RBT';

-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM Provides ORDER BY price DESC LIMIT 5;

-- Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT provider, price, piece FROM Provides ORDER BY price DESC LIMIT 4 OFFSET 2;

-- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
SELECT * FROM Provides WHERE provider = 'HAL' ORDER BY price DESC;

-- Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(DISTINCT provider) FROM Provides WHERE piece = 1;