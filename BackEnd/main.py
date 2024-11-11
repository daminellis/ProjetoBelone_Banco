from flask import Flask
from flask_cors import CORS 
from database.db import db
from routes.index import default_routes

class App:
    def __init__(self):
        self.app = Flask(__name__)
        CORS(self.app)
        # Ajustar a string de conexão para usar o serviço MySQL do Docker
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@mysql:3306/dbbanco'
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Recomenda-se definir isso como False
        db.init_app(self.app)
        default_routes(self.app)

    def run(self):
        # Ajustar o host para 0.0.0.0 para funcionar no Docker  
        self.app.run(port=3000, host='0.0.0.0', debug=True)

if __name__ == '__main__':
    app = App()
    app.run()
