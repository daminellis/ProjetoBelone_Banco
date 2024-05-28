import React from 'react';
import '../styles/MenuCadastro.css'; // Verifique o caminho relativo

function MenuCadastro() {
  return (
    <div className="corfundo">
      <div className="menu">
        <h1>Cadastro</h1>
        <form>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" />
          
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default MenuCadastro;
