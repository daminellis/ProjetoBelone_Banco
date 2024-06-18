import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Transfer = () => {
    const navigate = useNavigate();
    const [emailDestinatario, setEmailDestinatario] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [message, setMessage] = useState('');
    const emailRemetente = localStorage.getItem('email');

    const handleTransfer = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/transferencia', {
                email_remetente: emailRemetente,
                email_destinatario: emailDestinatario,
                quantidade: parseFloat(quantidade)
            });

            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data.message || 'Erro ao realizar transferência');
        }
    };

    return (
        <div className="transfer-container">
            <form onSubmit={handleTransfer} className="transfer-form">
                <h2>Transferir Dinheiro</h2>
                {message && <div className="message">{message}</div>}
                <div className="input-group">
                    <label htmlFor="emailDestinatario">Email do Destinatário:</label>
                    <input
                        type="email"
                        id="emailDestinatario"
                        value={emailDestinatario}
                        onChange={(e) => setEmailDestinatario(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input
                        type="number"
                        id="quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Transferir</button>
            </form>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
};

export default Transfer;
