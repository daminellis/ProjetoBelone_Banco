import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MenuCadastro from './components/MenuCadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/MenuCadastro" element={<MenuCadastro />} />
      </Routes>
    </Router>
  );
}

export default App;