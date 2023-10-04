const conn =require("../index.js")

module.exports = {
 
    getAll: function (callback) {
      const sql = 'SELECT * FROM `owner` '
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,username) {
        const sql = 'SELECT * FROM `owner`where username=?'
        conn.query(sql,[username], function (error, results, fields) {
          callback(error, results);
        });
      
      },
      
      add: function (callback,username,email,password,restaurant_name,food_category) {
        const sql = 'INSERT INTO owner SET ?'
        conn.query(sql,{username,email,password,restaurant_name,food_category}, function (error, results, fields) {
          callback(error, results);
      } )
    },
  }