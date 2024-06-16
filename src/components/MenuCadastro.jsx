import React, { useState } from 'react';
import '../styles/MenuCadastro.css'; 
import { Navigate } from 'react-router-dom';

function MenuCadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    numero: '',
    cpf: '',
    areadetrabalho: '',
    salario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar dados para o backend
    fetch('http://localhost:3000/cads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
  
      navigate('/MenuAdmin');
    
    })
    .catch((error) => {
      console.error('Erro ao cadastrar usuario:', error);
      setError('Falha no cadastro de usuarios. Tente novamente');
    
    });
  };

  return (
    <div className="corfundo">
      <div className="menu">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} />
          
          <label htmlFor="numero">Número:</label>
          <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} />

          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} />

          <label htmlFor="areadetrabalho">Área de Trabalho:</label>
          <input type="text" id="areadetrabalho" name="areadetrabalho" value={formData.areadetrabalho} onChange={handleChange} />

          <label htmlFor="salario">Salário:</label>
          <input type="text" id="salario" name="salario" value={formData.salario} onChange={handleChange} />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default MenuCadastro;
