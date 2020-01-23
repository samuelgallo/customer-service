function SacDAO(connection){
    this._connection = connection;
}

SacDAO.prototype.getSac = function(requestback){
    this._connection.query('SELECT * FROM request ORDER BY data_criacao DESC', requestback);
}

SacDAO.prototype.getAtendimento = function(id_request, requestback){
    console.log(id_request.id_request);
    this._connection.query('SELECT * FROM request WHERE id_request = ' + id_request.id_request, requestback);
}

SacDAO.prototype.salvarAtendimento = function(request, requestback){
    this._connection.query('INSERT INTO request SET ?', request, requestback);
}

SacDAO.prototype.get10UltimasSac = function(requestback){
    this._connection.query('SELECT * FROM request ORDER BY data_criacao DESC LIMIT 10', requestback);
}

module.exports = function(){
    return SacDAO;
}