const cart = require("../Database/models/cart");



module.exports = {
  
    getAllCart: function(req, res) {
        cart.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })

    },
   
    getCartByCustomerById: function(req, res) {
        const customerId = req.params.id;
      
        cart.getByCustomerId(function(err, results) {
          if (err) {
            res.status(500).send(err);
          } else {
            
            const groupedResults = results.reduce((acc, row) => {
              if (!acc[row.foodOrder]) {
                acc[row.foodOrder] = {
                  foodOrder: row.foodOrder,
                  orderStatus: row.orderStatus,
                  foodList: [],
                };
              }
      
             
              acc[row.foodOrder].foodList.push({
                Idfood: row.Idfood,
                name: row.name,
                imgUrl: row.imgUrl,
                price: row.price,
                desc: row.desc,
           
              });
      
              return acc;
            }, {});
      
           
            const formattedResults = Object.values(groupedResults);
      
            res.json(formattedResults[0]);
          }
        }, customerId);
      },
      
    
    addCart: function(req, res) {
        const cartItem= req.body;
   
        cart.add( function(err, results){
            if(err) res.status(500).send(err);
            else res.json(results)
        },cartItem.orderStatus,cartItem.customer_iduser)
    },
    updateStatus:function(req,res){
        const idFood=req.params.id
        const newOrderStatus=req.body.orderStatus
        cart.updateStatus(function(err, results){
            if(err) res.status(500).send(err);
            else res.json(results)
        },idFood,newOrderStatus.customer.iduser)
    },

   

}