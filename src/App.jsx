import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MenuCadastro from './components/MenuCadastro';
import MenuUsuario from './components/MenuUsuario';
import MenuBancario from './components/MenuBancario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/MenuBancario" element={<MenuBancario/>}/>
        <Route path="/MenuCadastro" element={<MenuCadastro/>} />
        <Route path="/MenuUsuario" element={<MenuUsuario/>}/>
      </Routes>
    </Router>
  );
}

export default App;