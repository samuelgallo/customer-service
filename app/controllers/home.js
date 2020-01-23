module.exports.index = function(application, req, res){

    var connection = application.config.dbConnection();
    var sacModel = new application.app.models.SacDAO(connection);

    sacModel.get10UltimasSac(function(error, result){
        res.render('home/index', { sac : result });
    });
}