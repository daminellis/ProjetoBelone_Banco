import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DetalhesSaldo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pessoa, setPessoa] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    dinheiroguardado: ''
  });

  useEffect(() => {
    if (location.state && location.state.idusuario) {
      axios.get(`http://localhost:3000/saldos/${location.state.idusuario}`)
        .then(response => {
          setPessoa(response.data);
          setFormData({ dinheiroguardado: response.data.dinheiroguardado });
          setLoading(false);
        })
        .catch(error => {
          setError('Erro ao buscar detalhes do usuário');
          setLoading(false);
        });
    } else {
      setError('ID do usuário não encontrado');
      setLoading(false);
    }
  }, [location]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    axios.put(`http://localhost:3000/saldos/${location.state.idusuario}`, {
      dinheiroguardado: formData.dinheiroguardado
    })
      .then(response => {
        setPessoa(response.data);
        setEditMode(false);
      })
      .catch(error => {
        if (error.response) {
          console.log('Data do erro:', error.response.data);
          console.log('Status do erro:', error.response.status);
          console.log('Headers do erro:', error.response.headers);
          setError(`Erro ao atualizar saldo: ${error.response.data.error}`);
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
      <h1>Detalhes do Usuário</h1>
      {editMode ? (
        <div>
          <p>Dinheiro Guardado: <input type="text" name="dinheiroguardado" value={formData.dinheiroguardado} onChange={handleChange} /></p>
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <p>Nome: {pessoa.nome}</p>
          <p>Número: {pessoa.numero}</p>
          <p>CPF: {pessoa.cpf}</p>
          <p>Nascimento: {pessoa.nascimento}</p>
          <p>Local de Trabalho: {pessoa.locdetrabalho}</p>
          <p>Email: {pessoa.email}</p>
          <p>Dinheiro Guardado: {pessoa.dinheiroguardado}</p>
          <p>Senha: {pessoa.senha}</p>
          <p>Perfil: {pessoa.idperfil}</p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default DetalhesSaldo;
