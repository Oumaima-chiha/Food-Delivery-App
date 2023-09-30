const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'oumayma',
  password : '100798',
  database : 'mydb'
});

  connection.connect(function(err) {
    if(err) console.log("Error to connect to database", err);
    else console.log("Database connected");
  })

module.exports = connection;