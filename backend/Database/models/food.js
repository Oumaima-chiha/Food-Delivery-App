const conn =require("../index.js")

module.exports = {
 
    getAll: function (callback) {
      const sql = 'SELECT * FROM `food` '
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      
      getOne: function(callback,Idfood) {
        const sql = 'SELECT * FROM `food`where idfood =?'
        conn.query(sql,[Idfood], function (error, results, fields) {
          callback(error, results);
        });
      
      },
      
      add: function (callback,name,price,desc,imgUrl,Owner_idOwner) {
        const sql = 'INSERT INTO food SET ?'
        conn.query(sql,{name,price,desc,imgUrl,Owner_idOwner}, function (error, results, fields) {
          callback(error, results);
      } )
    },
    update: function(callback,Idfood ,name,desc,imgUrl,price){
      const sql='UPDATE `food` SET ? where Idfood=?'
     conn.query(sql,[{name , desc ,imgUrl,price},Idfood],function (error, results, fields) {
        callback(error, results);
    } )
    },
    delete: function(callback,Idfood){
      const sql='DELETE from `food` where Idfood=?'
      conn.query(sql,[Idfood],function (error, results, fields) {
        callback(error, results);
    } )
    },
    addFoodToCart: function(callback,cart_foodOrder,food_Idfood){
      const sql='INSERT Into `cart_food`set ?'
      conn.query(sql,[{cart_foodOrder,food_Idfood}],function(error,results,fields){
        callback(error,results);
      })
    }
  }