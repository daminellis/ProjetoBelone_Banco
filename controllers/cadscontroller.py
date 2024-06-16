from flask import  request, jsonify
from database.db import db
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.sql import text
from datetime import datetime

def cads_controller():
    data = request.json  # Assuming JSON data is sent in the request body
    nome = data.get('nome')
    numero = data.get('numero')
    cpf = data.get('cpf')
    nascimento = data.get('nascimento')
    locdetrabalho = data.get('locdetrabalho')
    email = data.get('email')
    senha = data.get('senha')
    dinheiroguardado = data.get('dinheiroguardado', 0)
    idperfil = data.get('idperfil', 2)  # Default to 2 if not provided

    try:
        # Convertendo a string de data para um objeto date
        nascimento_date = datetime.strptime(nascimento, '%Y-%m-%d').date()

        # Execute raw SQL to insert new user data
        query = text("""
            INSERT INTO dbbanco.pessoas (nome, numero, cpf, nascimento, locdetrabalho, email, senha, dinheiroguardado, idperfil)
            VALUES (:nome, :numero, :cpf, :nascimento, :locdetrabalho, :email, :senha, :dinheiroguardado, :idperfil)
        """)
        db.session.execute(query, {
            'nome': nome,
            'numero': numero,
            'cpf': cpf,
            'nascimento': nascimento_date,
            'locdetrabalho': locdetrabalho,
            'email': email,
            'senha': senha,
            'dinheiroguardado': dinheiroguardado,
            'idperfil': idperfil
        })
        db.session.commit()

        return jsonify({'message': 'Usuário criado com sucesso!'}), 201

    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'message': 'Erro ao criar usuário', 'error': str(e)}), 500

