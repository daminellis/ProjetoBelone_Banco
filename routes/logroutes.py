from controllers.logscontroller import logs_controller

def login(app):
    app.route('/logs', methods=['GET'])(logs_controller)

