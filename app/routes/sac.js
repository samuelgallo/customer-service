module.exports = function(application) {

    application.get('/sac', function(req, res) {
        application.app.controllers.sac.sac(application, req, res);
    });

    application.get('/request', function(req, res) {
        application.app.controllers.sac.request(application, req, res);
    });
}