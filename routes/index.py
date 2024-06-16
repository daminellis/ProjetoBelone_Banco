from routes.logroutes import login
from routes.cadsroutes import cadastro

def default_routes(app):
    login(app)
    cadastro(app)