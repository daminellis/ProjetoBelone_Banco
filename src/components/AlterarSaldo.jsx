import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AlterarSaldo() {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/saldos')  // Verifique o endpoint correto
      .then(response => {
        setPessoas(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Erro ao buscar pessoas');
        setLoading(false);
      });
  }, []);

  const handleVerDetalhes = (idusuario) => {
    navigate('/DetalhesSaldo', { state: { idusuario } });
  };
  

  const handleVoltar = () => {
    // Voltar para a página anterior
    navigate(-1);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.idusuario}>
            {pessoa.nome} - 
            <button onClick={() => handleVerDetalhes(pessoa.idusuario)}>Ver Detalhes</button>
          </li>
        ))}
      </ul>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
}

export default AlterarSaldo;
