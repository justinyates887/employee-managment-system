const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  password: "K3ndal1!",
  database: "employees"
});


  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

connection.query = util.promisify(connection.query);

module.exports = connection;
