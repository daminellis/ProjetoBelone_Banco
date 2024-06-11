from routes.logroutes import login

def default_routes(app):
    login(app)
