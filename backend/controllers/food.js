const food = require("../Database/models/food.js");



module.exports = {

    getAllFood: function(req, res) {
        food.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })

    },

    getOneFood: function(req, res) {
        const foodID = req.params.id
        console.log(foodID)
        food.getOne(function(err, results){
            if(err) res.status(500).send(err);
            else res.json(results)
        },foodID)

    },

    addFood: function(req, res) {
        const foood = req.body;

        food.add( function(err, results){
            if(err) res.status(500).send(err);
            else res.json(results)
        },foood.name,foood.price,foood.desc, foood.imgUrl,req.user.idOwner)
    },
    updateFood:function(req,res){
        const idFood=req.params.id
        const newFood=req.body
        food.update(function(err, results){
            if(err) res.status(500).send(err);
            else res.json(results)
        },idFood,newFood.name,newFood.desc,newFood.imgUrl,newFood.price)
    },
    deleteFood:function(req,res){
    const Idfood=req.params.id
    food.delete(function(err,results){
        if(err) res.status(500).send(err);
        else res.json(results)
    },Idfood)
},
addFoodToCart:function(req,res){
     const {idFood,idCart}=req.body
     food.addFoodToCart(function(err,results){
        if(err) res.status(500).send(err);
            else res.json(results)
        },idCart,idFood)
    },




}
