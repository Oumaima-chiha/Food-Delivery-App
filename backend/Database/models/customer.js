const conn =require("../index.js")

module.exports = {
 
    getAll: function (callback) {
      const sql = 'SELECT * FROM `customer` '
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,username) {
        const sql = 'SELECT * FROM `owner`where userName=?'
        conn.query(sql,[userName], function (error, results, fields) {
          callback(error, results);
        });
      
      },
      
      add: function (callback,iduser,userName,userAdress,userNumber,userLastName) {
        const sql = 'INSERT INTO customer SET ?'
        conn.query(sql,{iduser,userName,userAdress,userNumber,userLastName}, function (error, results, fields) {
          callback(error, results);
      } )
    },
  }