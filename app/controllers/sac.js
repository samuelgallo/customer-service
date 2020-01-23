module.exports.sac = function(application, req, res){
    var connection = application.config.dbConnection();
    var sacModel = new application.app.models.SacDAO(connection);

    sacModel.getSac(function(error, result){
        res.render('sac/sac', { sac : result });
    });
}

module.exports.request = function(application, req, res){
    var connection = application.config.dbConnection();
    var sacModel = new application.app.models.SacDAO(connection);

    var id_request = req.query;

    sacModel.getAtendimento(id_request, function(error, result){
        res.render('sac/request', { request : result });
    });
}