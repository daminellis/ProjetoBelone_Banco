import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';  // Importando moment.js para formatação de datas

function AddBancario() {
  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    cpf: '',
    nascimento: '',
    salario: '',
    email: '',
    senha: '',
    idperfil: 3  // Valor padrão
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Formatar a data de nascimento usando moment.js para garantir o formato correto
      formData.nascimento = moment(formData.nascimento).format('YYYY-MM-DD');

      const response = await axios.post('http://localhost:3000/bancarios', formData);
      console.log('Resposta do servidor:', response.data);
      setLoading(false);
      // Limpar formulário após o sucesso
      setFormData({
        nome: '',
        numero: '',
        cpf: '',
        nascimento: '',
        salario: '',
        email: '',
        senha: '',
        idperfil: 3
      });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
      if (error.response) {
        console.error('Detalhes do erro:', error.response.data);
        setError('Erro ao cadastrar usuário: ' + error.response.data.error);
      } else {
        setError('Erro ao cadastrar usuário: ' + error.message);
      }
      setLoading(false);
    }
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
