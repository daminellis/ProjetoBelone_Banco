from flask import Flask, request, jsonify
from database.db import db
from models.admmodel import Bancarios
from sqlalchemy import text
from datetime import datetime

def adm_controller(idbancario=None):
    if request.method == 'POST':
        try:
            data = request.get_json()

            # Convertendo a string de data para um objeto date
            nascimento_date = datetime.strptime(data['nascimento'], '%Y-%m-%d').date()

            # Execute raw SQL para inserir os dados do novo bancário
            query1 = text("""
                INSERT INTO dbbanco.bancario (nome, numero, cpf, nascimento, salario, email, senha, idperfil)
                VALUES (:nome, :numero, :cpf, :nascimento, :salario, :email, :senha, :idperfil)
            """)
            db.session.execute(query1, {
                'nome': data['nome'],
                'numero': data['numero'],
                'cpf': data['cpf'],
                'nascimento': nascimento_date,
                'salario': data['salario'],
                'email': data['email'],
                'senha': data['senha'],
                'idperfil': data.get('idperfil', 3)  # Valor padrão se não especificado
            })

            # Execute raw SQL para inserir os dados do novo usuário
            query2 = text("""
                INSERT INTO dbbanco.usuarios (email, senha, id_perfil, nome)
                VALUES (:email, :senha, :id_perfil, :nome)
            """)
            db.session.execute(query2, {
                'email': data['email'],
                'senha': data['senha'],
                'id_perfil': data['idperfil'],
                'nome': data['nome']
            })

            db.session.commit()

            return jsonify({'message': 'Bancário criado com sucesso!'}), 201

        except Exception as e:
            return jsonify({'error': 'Erro ao criar bancário: {}'.format(str(e))}), 400

    elif request.method == 'GET':
        try:
            bancarios = Bancarios.query.all()
            return jsonify([bancario.to_dict() for bancario in bancarios]), 200
        except Exception as e:
            return jsonify({'error': 'Erro ao buscar bancários: {}'.format(str(e))}), 400

def adm_editter(idbancario=None):
    if request.method == 'PUT':
        try:
            data = request.get_json()
            bancario = Bancarios.query.get_or_404(idbancario)
            
            bancario.nome = data.get('nome', bancario.nome)
            bancario.numero = data.get('numero', bancario.numero)
            bancario.cpf = data.get('cpf', bancario.cpf)
            bancario.nascimento = data.get('nascimento', bancario.nascimento)
            bancario.salario = data.get('salario', bancario.salario)
            bancario.email = data.get('email', bancario.email)
            bancario.senha = data.get('senha', bancario.senha)
            bancario.idperfil = data.get('idperfil', bancario.idperfil)
            
            query2 = text("""
                INSERT INTO dbbanco.usuarios (email, senha, id_perfil, nome)
                VALUES (:email, :senha, :id_perfil, :nome)
            """)
            db.session.execute(query2, {
                'email': data['email'],
                'senha': data['senha'],
                'id_perfil': data['idperfil'],
                'nome': data['nome']
            })
            
            db.session.commit()
            return jsonify(bancario.to_dict()), 200
        except Exception as e:
            return jsonify({'error': 'Erro ao atualizar bancário: {}'.format(str(e))}), 400

            

    elif request.method == 'DELETE':
        try:
            bancario = Bancarios.query.get_or_404(idbancario)
            db.session.delete(bancario)
            db.session.commit()
            return jsonify({'message': 'Bancário deletado com sucesso'}), 200
        except Exception as e:
            return jsonify({'error': 'Erro ao deletar bancário: {}'.format(str(e))}), 400

    elif request.method == 'GET': 
        try:
            bancario = Bancarios.query.get_or_404(idbancario)
            return jsonify(bancario.to_dict()), 200
        except Exception as e:
            return jsonify({'error': 'Bancário não encontrado'}), 404

    else:
        return jsonify({'error': 'Método HTTP não suportado'}), 405
