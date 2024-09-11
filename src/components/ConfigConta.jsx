import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfigConta = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState({
        nome: '',
        numero: '',
        email: '',
        cpf: '',
        senha: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const email = localStorage.getItem('email');

            if (!email) {
                setError('Email do usuário não encontrado');
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/dadosdousuario', {
                    params: { email }
                });

                if (response.data) {
                    setUserData(response.data);
                    // Inicializa os dados editados com os dados atuais do usuário
                    setEditedData(response.data);
                } else {
                    setError('Erro ao buscar dados do usuário');
                }
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
                setError('Erro ao buscar dados do usuário');
            }
        };

        fetchUserData();
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { nome, numero, email, cpf, senha } = editedData;

        try {
            const response = await axios.put('http://localhost:3000/alterardados', {
                nome,
                numero,
                email,
                cpf,
                senha
            });

            console.log('Resposta do servidor:', response.data);

            if (response.status === 200) {
                setUserData(editedData); // Atualiza os dados mostrados após a edição
                setEditMode(false);
            } else {
                setError('Erro ao atualizar dados do usuário');
            }
        } catch (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
            setError('Erro ao atualizar dados do usuário');
        }
    };

    const handleDeleteClick = async () => {
        const { email } = editedData;

        try {
            const response = await axios.delete('http://localhost:3000/deletarusuario', {
                data: { email } // Envia o email do usuário a ser deletado no corpo da requisição
            });

            console.log('Resposta do servidor:', response.data);

            if (response.status === 200) {
                navigate(-2); // Navega de volta após a exclusão
            } else {
                setError('Erro ao deletar usuário');
            }
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            setError('Erro ao deletar usuário');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Carregando...</div>;
    }

    if (editMode) {
        return (
            <div>
                <h2>Editar Dados da Conta</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={editedData.nome}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Número:
                        <input
                            type="text"
                            name="numero"
                            value={editedData.numero}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={editedData.email}
                            onChange={handleInputChange}
                            readOnly // Campo de email readonly para evitar modificação acidental
                        />
                    </label>
                    <br />
                    <label>
                        CPF:
                        <input
                            type="text"
                            name="cpf"
                            value={editedData.cpf}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Senha:
                        <input
                            type="password"
                            name="senha"
                            value={editedData.senha}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Salvar Alterações</button>
                    <button onClick={handleDeleteClick} style={{ marginLeft: '10px' }}>Deletar Usuário</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <h2>Configuração da Conta</h2>
            <p>Nome: {userData.nome}</p>
            <p>Número: {userData.numero}</p>
            <p>Email: {userData.email}</p>
            <p>CPF: {userData.cpf}</p>
            <p>Senha: **********</p>
            <button onClick={handleEditClick}>Editar Dados</button>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={handleDeleteClick}>Deletar Usuário</button>
        </div>
    );
};

export default ConfigConta;
