const conn =require("../index.js")

module.exports = {
 
    getAll: function (callback) {
      const sql = 'SELECT * FROM `customer` '
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,email) {
        const sql = 'SELECT * FROM `customer`where email=?'
        conn.query(sql,[email], function (error, results, fields) {
          callback(error, results);
        });
      
      },
      
      add: function (callback,password,lastName,name,email,phoneNumber,address) {
        const sql = 'INSERT INTO customer SET ?'
        conn.query(sql,{password,lastName,name,email,phoneNumber,address}, function (error, results, fields) {
          callback(error, results);
      } )
    },
  }