import React from 'react';
import '../styles/MenuUsuario.css';

function MenuUsuario() {
  return (
    <div className="usuario-menu">
      <h2 className="welcome">Bem-vindo!</h2>
      <ul className="menu-items">
        <li>
          <a href="ConfigConta">Conta</a>
        </li>
        <li>
          <a href="FazerTransferencia">Fazer Transferencia</a>
        </li>
        <li>
          Pagamentos
        </li>
        <li>
          Solicitar Empréstimo
        </li>
      </ul>
    </div>
  );
}

export default MenuUsuario;