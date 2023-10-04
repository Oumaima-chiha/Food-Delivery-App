const express = require('express');
const router = express.Router();


const { getAllFood, getOneFood, addFood,updateFood,deleteFood } = require('../controllers/food');

router.get('/getAll', getAllFood);

router.get('/:idpost', getOneFood);

router.post('/add', addFood);

router.put('/update/:id',updateFood);

router.delete('/delete/:id',deleteFood);



module.exports = router;