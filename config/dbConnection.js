var mysql = require('mysql');

// MYSQL connection
var connMySQL = function(){
    return connection = mysql.createConnection({
        host : 'localhost',
		user : 'root',
		password : '123456',
		database : 'customerservice'
    });
}

module.exports = function(){
    return connMySQL;
}