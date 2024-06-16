from controllers.admcontroller import adm_controller

def admin(app):
    app.route('/bancarios', methods=['POST','GET'])(adm_controller)
    app.route('/bancarios/<int:idbancario>', methods=['PUT', 'DELETE'])(adm_controller)

