import React, { useState } from 'react';
import '../styles/MenuCadastro.css';
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook

function AddBancario() {
  const [formData, setFormData] = useState({
    idbancario: '',
    nome: '',
    numero: '',
    cpf: '',
    nascimento: '',
    salario: '',
    email: '',
    senha: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate instead of history

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
    fetch('http://localhost:3000/bancarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      navigate('/MenuAdmin'); // Navega para a rota após o cadastro bem-sucedido
    })
    .catch(error => {
      console.error('Erro ao cadastrar usuário:', error);
      setError('Falha no cadastro de usuário. Tente novamente.');
    });
  };

  return (
    <div className="corfundo">
      <div className="menu">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          
          <label htmlFor="numero">Número:</label>
          <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />

          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />

          <label htmlFor="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" value={formData.nascimento} onChange={handleChange} required />

          <label htmlFor="salario">Salário:</label>
          <input type="text" id="salario" name="salario" value={formData.salario} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default AddBancario;
