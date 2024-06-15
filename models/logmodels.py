from database.db import db

class Usuario(db.Model):
    __tablename__ = 'usuarios'

    idusuario = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(50), nullable=False)
    numero = db.Column(db.String(15), nullable=False)
    cpf = db.Column(db.String(14), nullable=False)
    nascimento = db.Column(db.Date, nullable=False)
    local_de_trabalho = db.Column(db.String(50), nullable=False)
    dinheiroguardado = db.Column(db.Float(10, 2), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    senha = db.Column(db.String(30), nullable=False)
    idperfil = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            'idusuario': self.idusuario,
            'nome': self.nome,
            'numero': self.numero,
            'cpf': self.cpf,
            'nascimento': self.nascimento,
            'local_de_trabalho': self.local_de_trabalho,
            'dinheiroguardado': self.dinheiroguardado,
            'email': self.email,
            'senha': self.senha,
            'idperfil': self.idperfil,
            'tabela': 'usuarios'
        }
