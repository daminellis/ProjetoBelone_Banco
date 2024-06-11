import React from 'react';
import '../styles/MenuBancario.css';

function MenuBancario() {
  return (
    <div className="user-menu">
      <h2 className="welcome">Bem-vindo!</h2>
      <ul className="menu-items">
        <li>Criar Conta</li>
        <li>Criar Empréstimo</li>
        <li>Alterar Saldo</li>
      </ul>
    </div>
  );
}

export default MenuBancario;

