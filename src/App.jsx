import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MenuCadastro from './components/MenuCadastro';
import MenuUsuario from './components/MenuUsuario';
import MenuBancario from './components/MenuBancario';
import MenuAdimn from './components/MenuAdmin';
import AddBancario from './components/AddBancario';
import ListaBancarios from './components/ListaBancarios';
import DetalhesBancarios from './components/DetalhesBancarios';
import AlterarSaldo from './components/AlterarSaldo';
import DetalhesSaldo from './components/DetalhesSaldo';
import ConfigConta from './components/ConfigConta';
import FazerTransferencia from './components/FazerTransferencia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/MenuCadastro"      element={<MenuCadastro/>}/>
        <Route path="/MenuBancario"      element={<MenuBancario/>}/>
        <Route path="/MenuAdmin"         element={<MenuAdimn/>} />
        <Route path="/MenuUsuario"       element={<MenuUsuario/>}/>
        <Route path="/AddBancario"       element={<AddBancario/>}></Route>
        <Route path="/ListaBancarios"    element={<ListaBancarios/>}></Route>
        <Route path="/DetalhesBancarios" element={<DetalhesBancarios/>}></Route>
        <Route path="/AlterarSaldo"      element={<AlterarSaldo/>}></Route>
        <Route path="/DetalhesSaldo"     element={<DetalhesSaldo/>}></Route>
        <Route path="/Configconta"       element={<ConfigConta/>}></Route>
        <Route path="/FazerTransferencia"element={<FazerTransferencia/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;