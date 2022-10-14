CREATE TABLE `filme` (
  `filme_id` INT AUTO_INCREMENT NOT NULL ,
  `descricao` varchar(100) NOT NULL,
  `ano_lancamento` INT NOT NULL,
  `NOTA` INT DEFAULT NULL,
  PRIMARY KEY (`filme_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;