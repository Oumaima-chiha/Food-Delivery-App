const express = require('express');
const router = express.Router();


const { getAllFood, getOneFood, addFood,updateFood,deleteFood,addFoodToCart } = require('../controllers/food');
const {verifyTokenOwner} = require("../helper/verifyToken");

router.get('/getAll', getAllFood);

router.get('/:idpost', getOneFood);

router.post('/add',verifyTokenOwner,addFood);

router.put('/update/:id',verifyTokenOwner,updateFood);

router.delete('/delete/:id',verifyTokenOwner,deleteFood);

router.post('/addTocart',addFoodToCart);

module.exports = router;
