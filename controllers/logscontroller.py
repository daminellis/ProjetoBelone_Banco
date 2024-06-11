from flask import request, jsonify
from database.db import db
from models.logmodels import Admin, Bancario, Trabalhador, Usuario

def funcionario_controller():
    if request.method == 'GET':
        email = request.args.get('email')
        senha = request.args.get('senha')

        try:
            # Retrieve all users from each table
            admins = Admin.query.all()
            bancarios = Bancario.query.all()
            trabalhadores = Trabalhador.query.all()
            usuarios = Usuario.query.all()

            # Check each table for the provided email and senha
            for admin in admins:
                if admin.email == email and admin.check_password(senha):
                    return jsonify({'user': admin.to_dict(), 'role': 'Admin'})

            for bancario in bancarios:
                if bancario.email == email and bancario.check_password(senha):
                    return jsonify({'user': bancario.to_dict(), 'role': 'Bancario'})

            for trabalhador in trabalhadores:
                if trabalhador.email == email and trabalhador.check_password(senha):
                    return jsonify({'user': trabalhador.to_dict(), 'role': 'Trabalhador'})

            for usuario in usuarios:
                if usuario.email == email and usuario.check_password(senha):
                    return jsonify({'user': usuario.to_dict(), 'role': 'Usuario'})

            # If no match is found
            return jsonify({'message': 'Conta não encontrada ou senha incorreta'}), 404

        except Exception as e:
            return jsonify({'message': 'Erro ao buscar usuários', 'error': str(e)}), 500

    return jsonify({'message': 'Método não permitido'}), 405
