import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ListaBancarios() {
  const [bancarios, setBancarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/bancarios')
      .then(response => {
        setBancarios(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Erro ao buscar bancários');
        setLoading(false);
      });
  }, []);

  const handleVerDetalhes = (idBancario) => {
    // Navegar para a página de detalhes com o ID do bancário como estado
    navigate('/DetalhesBancarios', { state: { idBancario } });
  };

  const handleVoltar = () => {
    // Voltar para a página anterior
    navigate(-1);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista de Bancários</h1>
      <ul>
        {bancarios.map(bancario => (
          <li key={bancario.idbancario}>
            {bancario.nome} - 
            <button onClick={() => handleVerDetalhes(bancario.idbancario)}>Ver Detalhes</button>
          </li>
        ))}
      </ul>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
}

export default ListaBancarios;
