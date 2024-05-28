import React from 'react';
import MenuCadastro from './components/MenuCadastro';
import './styles/App.css'; // Certifique-se de que esse arquivo contém estilos globais, se necessário
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
