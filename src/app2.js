const mysql = require('mysql');
const CONFIG = require('./config.js');
function t01(){
	const connection = mysql.createConnection(CONFIG);
	connection.connect();
	let query = 'SELECT * FROM users';
	connection.query(query,function(error,result){
		console.log(result);
	});
	connection.end();
}
t01();