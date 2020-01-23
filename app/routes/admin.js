module.exports = function(application){
    application.get('/adicionar', function(req,res){
        application.app.controllers.admin.adicionar(application, req, res);
    });

    application.post('/sac/salvar', function(req,res){
        application.app.controllers.admin.sac_salvar(application, req, res);
    });
}