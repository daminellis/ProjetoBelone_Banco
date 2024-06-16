from database.db import db

class Usuario(db.Model):
    __tablename__ = 'usuarios'

    nome = db.Column(db.String(50), nullable=False)
    cpf = db.Column(db.String(14), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    senha = db.Column(db.String(30), nullable=False)
    idperfil = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            'nome': self.nome,
            'cpf': self.cpf,
            'email': self.email,
            'senha': self.senha,
            'idperfil': self.idperfil,
            'tabela': 'usuarios'
        }
