from flask import Flask, request, jsonify
from database.db import db
from models.admmodel import Bancarios

def adm_controller(idbancario=None):
    if request.method == 'POST':
        try:
            data = request.get_json()
            novo_bancario = Bancarios(
                nome=data['nome'],
                numero=data['numero'],
                cpf=data['cpf'],
                nascimento=data['nascimento'],
                salario=data['salario'],
                email=data['email'],
                senha=data['senha'],
                idperfil=data.get('idperfil', 3)  # Valor padrão 3 se não fornecido
            )
            db.session.add(novo_bancario)
            db.session.commit()
            return jsonify(novo_bancario.to_dict()), 201
        except Exception as e:
            return jsonify({'error': 'Erro ao criar bancário: {}'.format(str(e))}), 400

    elif request.method == 'GET':
        try:
            bancarios = Bancarios.query.all()
            return jsonify([bancario.to_dict() for bancario in bancarios]), 200
        except Exception as e:
            return jsonify({'error': 'Erro ao buscar bancários: {}'.format(str(e))}), 400

    elif request.method == 'PUT':
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

    else:
        return jsonify({'error': 'Método HTTP não suportado'}), 405

