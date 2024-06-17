from controllers.saldocontroller import saldo_controller

def login(app):
    app.route('/saldos', methods=['GET'])(saldo_controller)
    app.route('/saldos/<int:idusuario>', methods=['GET', 'PUT'])
