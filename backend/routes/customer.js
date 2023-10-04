const express = require('express');
const router = express.Router();


const { getAllCustomer, loginCustomer, registerCustomer } = require('../controllers/customer');

router.get('/getAll', getAllCustomer);

router.post('/login', loginCustomer);

router.post('/register', registerCustomer);

module.exports = router;