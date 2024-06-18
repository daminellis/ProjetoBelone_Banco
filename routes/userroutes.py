from controllers.usuariocontroller import mostrar_dados
from controllers.usuariocontroller import alterar_dados

def user(app):
    app.route('/dadosdousuario', methods=['GET'])(mostrar_dados)
    app.route('/alterardados', methods=['PUT'])(alterar_dados)