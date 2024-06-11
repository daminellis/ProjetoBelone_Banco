from controllers.logscontroller import logs_controller

def logs(app):
    app.route('/logs', methods=['GET'])(logs_controller)

