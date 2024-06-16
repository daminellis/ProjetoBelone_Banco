from routes.logroutes import login
from routes.cadsroutes import cadastro
from routes.admroutes import admin

def default_routes(app):
    login(app)
    cadastro(app)
    admin(app)