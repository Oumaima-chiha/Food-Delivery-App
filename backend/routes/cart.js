const express = require('express');
const router = express.Router();


const { getAllCart, getCartByCustomerById,updateStatus,addCart } = require('../controllers/cart');
router.get('/getAll', getAllCart);

router.post('/add', addCart);

router.get('/getOne/:id',getCartByCustomerById );

router.put('/update/:id',updateStatus);

module.exports = router;