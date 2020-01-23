module.exports.adicionar = function(application, req, res){
    res.render('admin/form_add', { validation : {}, request : {} });
}

module.exports.sac_salvar = function(application, req, res){
    var request = req.body;

    req.assert('origin', 'Origin is required').notEmpty();
    req.assert('subject', 'Subject  is required').notEmpty();
    req.assert('state', 'State  is required').notEmpty();
    req.assert('client', 'Client name  is required').notEmpty();
    req.assert('receptionist', 'Call receptionist is required').notEmpty();    
    
    req.assert('message', 'Message  is required').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add', {validation: erros,  request: request});
        return;
    }   

    var connection = application.config.dbConnection();
    var sacModel = new application.app.models.SacDAO(connection);

    sacModel.salvarAtendimento(request, function(error, result){
        res.redirect('/sac');
    });
}