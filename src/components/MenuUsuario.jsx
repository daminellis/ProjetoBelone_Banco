import React from 'react';
import '../styles/MenuUsuario.css';

function MenuUsuario() {
  return (
    <div className="user-menu">
      <h2 className="welcome">Bem-vindo!</h2>
      <ul className="menu-items">
        <li><a href="#">Conta</a></li>
        <li>Transferências</li>
        <li>Pagamentos</li>
        <li>Investimentos</li>
        <li>Solicitar Empréstimo</li>
      </ul>
    </div>
  );
}

export default MenuUsuario;

