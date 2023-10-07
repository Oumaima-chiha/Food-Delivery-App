const conn =require("../index.js")

module.exports = {
 
    getAll: function (callback) {
      const sql = 'SELECT * FROM `cart` '
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      
    getByCustomerId: function(callback, customer_iduser) {
        const sql = `
          SELECT c.*, cf.*, f.*
          FROM cart c
          JOIN cart_food cf ON c.foodOrder = cf.cart_foodOrder
          JOIN food f ON cf.food_Idfood = f.Idfood
          WHERE c.customer_iduser = ?;
        `;
      
        conn.query(sql, [customer_iduser], function(error, results, fields) {
          callback(error, results);
        });
      },      
      
      add: function (callback,orderStatus,customer_iduser) {
        const sql = 'INSERT INTO cart SET ?'
        conn.query(sql,{orderStatus,customer_iduser}, function (error, results, fields) {
          callback(error, results);
      } )
    },
    updateStatus: function(callback,foodOrder,orderStatus){
      const sql='UPDATE `cart` SET ? where foodOrder=?'
     conn.query(sql,[foodOrder,orderStatus],function (error, results, fields) {
        callback(error, results);
    } )
    },

  }