import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/logs', {
                email,
                senha: password
            });

            console.log('Resposta do servidor:', response.data);

            switch (response.data.nomeperfil) {
                case 'admin':
                    navigate('/MenuAdmin');
                    break;
                case 'pessoas':
                    navigate('/MenuUsuario');
                    break;
                case 'bancario':
                    navigate('/MenuBancario');
                    break;
                case 'funcionario':
                    navigate('/MenuFuncionario');
                    break;
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Usuario ou senha incorretos. Tente novamente');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                <a className="criarconta" href="MenuCadastro">Criar Conta</a>
            </form>
        </div>
    );
};

export default Login;
