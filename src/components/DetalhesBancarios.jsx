import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DetalhesBancarios() {
  const location = useLocation();
  const navigate = useNavigate();
  const [bancario, setBancario] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false); // Estado para controlar o modo de edição
  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    cpf: '',
    nascimento: '',
    salario: '',
    email: '',
    senha: '',
    idperfil: ''
  });

  useEffect(() => {
    if (location.state && location.state.idBancario) {
      axios.get(`http://localhost:3000/bancarios/${location.state.idBancario}`)
        .then(response => {
          setBancario(response.data); // Assume que response.data contém todos os campos necessários
          setFormData(response.data); // Preenche o formulário com os dados recebidos
          setLoading(false);
        })
        .catch(error => {
          setError('Erro ao buscar detalhes do bancário');
          setLoading(false);
        });
    } else {
      setError('ID do bancário não encontrado');
      setLoading(false);
    }
  }, [location]);

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja deletar este usuário?')) {
      axios.delete(`http://localhost:3000/bancarios/${location.state.idBancario}`)
        .then(response => {
          navigate(-1); // Retorna para a página anterior após a deleção, DELECAO?
        })
        .catch(error => {
          setError('Erro ao deletar o usuário');
        });
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Formatar a data para o formato YYYY-MM-DD
    const formattedDate = new Date(formData.nascimento).toISOString().split('T')[0];
  
    axios.put(`http://localhost:3000/bancarios/${location.state.idBancario}`, {
      ...formData,
      nascimento: formattedDate // Atualizar o campo nascimento com a data formatada
    })
      .then(response => {
        setBancario(response.data);
        setEditMode(false);
      })
      .catch(error => {
        if (error.response) {
          console.log('Data do erro:', error.response.data);
          console.log('Status do erro:', error.response.status);
          console.log('Headers do erro:', error.response.headers);
          setError(`Erro ao atualizar bancário: ${error.response.data.error}`);
        } else if (error.request) {
          console.log('Request feito, mas sem resposta:', error.request);
        } else {
          console.log('Erro durante a requisição:', error.message);
        }
        console.log('Configuração do erro:', error.config);
      });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Detalhes do Bancário</h1>
      {editMode ? (
        <div>
          <p>Nome: <input type="text" name="nome" value={formData.nome} onChange={handleChange} /></p>
          <p>Número: <input type="text" name="numero" value={formData.numero} onChange={handleChange} /></p>
          <p>CPF: <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} /></p>
          <p>Nascimento: <input type="text" name="nascimento" value={formData.nascimento} onChange={handleChange} /></p>
          <p>Salário: <input type="text" name="salario" value={formData.salario} onChange={handleChange} /></p>
          <p>Email: <input type="text" name="email" value={formData.email} onChange={handleChange} /></p>
          <p>Senha: <input type="text" name="senha" value={formData.senha} onChange={handleChange} /></p>
          <p>Perfil: <input type="text" name="idperfil" value={formData.idperfil} onChange={handleChange} /></p>
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <p>Nome: {bancario.nome}</p>
          <p>Número: {bancario.numero}</p>
          <p>CPF: {bancario.cpf}</p>
          <p>Nascimento: {bancario.nascimento}</p>
          <p>Salário: {bancario.salario}</p>
          <p>Email: {bancario.email}</p>
          <p>Senha: {bancario.senha}</p>
          <p>Perfil: {bancario.idperfil}</p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
      <button onClick={handleDelete}>Deletar Usuário</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default DetalhesBancarios;
