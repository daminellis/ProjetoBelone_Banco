from flask import request
from database.db import db
from models.logmodels import Admin,Bancario,Trabalhador,Usuario]

def funcionario_controller():
  
    request.method == 'GET'
    try:
        data = Admin.query.all()
        data = Bancario.query.all()
        data = Trabalhador.query.all()
        data = Usuario.query.all()
        data = {'funcionarios' : [funcionario.to_dict() for funcionario in data]}
        return data
    except Exception as e:
        return 'usuarios nao foram buscados'
