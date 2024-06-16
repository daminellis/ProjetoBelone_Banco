from database.db import db

class Usuario(db.Model):
    __tablename__ = 'pessoas'

    idusuario = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(50), nullable=False)
    numero = db.Column(db.String(15), nullable=False)
    cpf = db.Column(db.String(14), nullable=False)
    nascimento = db.Column(db.Date, nullable=False)
    locdetrabalho = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    senha = db.Column(db.String(30), nullable=False)
    dinheiroguardado = db.Column(db.Sting(10,2), nullable=False, default = 0)
    idperfil = db.Column(db.Integer, nullable=False, default=2)

    def to_dict(self):
        return {
            'idusuario': self.idusuario,
            'nome': self.nome,
            'numero': self.numero,
            'cpf': self.cpf,
            'email': self.email,
            'senha': self.senha,
            'idperfil': self.idperfil,
            'tabela': 'pessoas'
        }
