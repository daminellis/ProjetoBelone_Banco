import React from 'react';
import '../styles/MenuAdmin.css'; 
import { Link } from 'react-router-dom';

function MenuAdmin() {
  return (
    <div className="admin-menu"> {/* Use a classe admin-menu para aplicar os estilos */}
      <h2 className="welcome">Bem-vindo, Admin!</h2>
      <ul className="menu-items">
        <li>
          <Link to="/AddBancario">Adicionar Bancário</Link>
        </li>
        <li>
          <Link to="/ListaBancarios"> Bancarios</Link>
        </li>
        <li>
          <Link to="/">Voltar</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuAdmin;
