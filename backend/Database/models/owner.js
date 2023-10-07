const conn =require("../index.js")

module.exports = {
 
    getAll: function (callback) {
      const sql = 'SELECT * FROM `owner` '
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,email) {
        const sql = 'SELECT * FROM `owner`where email=?'
        conn.query(sql,[email], function (error, results, fields) {
          callback(error, results);
        });
      
      },
      
      add: function (callback,email,password,restaurant_name,food_category) {
        const sql = 'INSERT INTO owner SET ?'
        conn.query(sql,{email,password,restaurant_name,food_category}, function (error, results, fields) {
          callback(error, results);
      } )
    },
  }