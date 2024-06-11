import React from 'react';
import '../styles/MenuAdmin.css'; // Importe o arquivo de estilos

function MenuAdmin() {
  return (
    <div className="admin-menu"> {/* Use a classe admin-menu para aplicar os estilos */}
      <h2 className="welcome">Bem-vindo, Admin!</h2>
      <ul className="menu-items">
        <li>Adicionar Bancário</li>
        <li>Definir Salário</li>
        <li>Usuarios</li>
        <li>Bancarios</li>
      </ul>
    </div>
  );
}

export default MenuAdmin;
