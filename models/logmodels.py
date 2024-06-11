from database.db import db

class Admin(db.Model):
    __tablename__ = 'admin'

    email = db.Column(db.String(50), nullable=False)
    senha = db.Column(db.String(30), nullable=False)

    def to_dict(self):
        return {'email': self.email, 'senha': self.senha, 'tabela': 'admin'}

class Bancario(db.Model):
    __tablename__ = 'bancario'

    email = db.Column(db.String(50), nullable=False)
    senha = db.Column(db.String(30), nullable=False)

    def to_dict(self):
        return {'email': self.email, 'senha': self.senha, 'tabela': 'bancario'}

class Trabalhador(db.Model):
    __tablename__ = 'trabalhadores'

    email = db.Column(db.String(50), nullable=False)
    senha = db.Column(db.String(30), nullable=False)

    def to_dict(self):
        return {'email': self.email, 'senha': self.senha, 'tabela': 'trabalhadores'}

class Usuario(db.Model):
    __tablename__ = 'usuarios'

    email = db.Column(db.String(50), nullable=False)
    senha = db.Column(db.String(30), nullable=False)

    def to_dict(self):
        return {'email': self.email, 'senha': self.senha, 'tabela': 'usuarios'}
