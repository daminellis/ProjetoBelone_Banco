CREATE TABLE `admin` (
  `idadmin` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `numero` VARCHAR(15) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idadmin`)
);


CREATE TABLE `bancario` (
  `idbancario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `numero` VARCHAR(15) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `nascimento` DATE NOT NULL, 
  `salario` DECIMAL(10, 2),
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  `criado_em` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auditoria: data de criação
  -- (isto serve para saber caso algo seja criado, mostrar a hora em que foi criado)
  PRIMARY KEY (`idbancario`)
);
	
	
CREATE TABLE `trabalhadores` (
  `idtrabalhador` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `numero` VARCHAR(15) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `areadetrabalho` VARCHAR(35) NOT NULL,
  `salario` DECIMAL(10, 2),
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idtrabalhador`)
);

CREATE TABLE `usuarios` (
  `idusuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `numero` VARCHAR(15) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `nascimento` DATE NOT NULL,
  `local de trabalho` VARCHAR(50) NOT NULL,
  `dinheiroguardado` float(10, 2) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idusuario`)
);

CREATE TABLE emprestimos (
    id_emprestimo INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario_proprietario INT(10) unsigned,
    id_bancario_responsavel INT(10) unsigned,
    valor_emprestimo DECIMAL(10, 2),
    status_emprestimo ENUM('pendente', 'aceito', 'rejeitado', 'outro'),
    data_solicitacao DATE,
    data_aprovacao_rejeicao DATE,
    detalhes_adicionais TEXT,
    FOREIGN KEY (id_usuario_proprietario) REFERENCES usuarios(idusuario),
    FOREIGN KEY (id_bancario_responsavel) REFERENCES bancario(idbancario)
);

