CREATE TABLE `admin` (
  `codigo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `numero` VARCHAR(15) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`codigo`)
);


CREATE TABLE `bancario` (
  `codigo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `numero` VARCHAR(15) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `nascimento` DATE NOT NULL, 
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  `criado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auditoria: data de criação 
  --(isto serve para saber caso algo seja criado, mostrar a hora em que foi criado)
  PRIMARY KEY (`codigo`)
);
	
