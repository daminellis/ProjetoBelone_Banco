import React from 'react';
import '../styles/MenuBancario.css';
import { Link } from 'react-router-dom';

function MenuBancario() {
  return (
    <div className="bancario-menu">
      <h2 className="welcome">Bem-vindo!</h2>
      <ul className="menu-items">
        <li>
          <Link to="/MenuCadastro">Criar Conta</Link>
        </li>
        <li>
          <Link to="/GerirEmprestimos">Gerir Empréstimos</Link></li>
        <li>
          <Link to="/AlterarSaldo">Alterar Saldo</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuBancario;

