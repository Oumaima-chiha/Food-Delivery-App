const express = require('express');
const router = express.Router();


const { getAllOwner, loginOwner, registerOwner } = require('../controllers/owner');

router.get('/getAll', getAllOwner);

router.post('/login', loginOwner);

router.post('/register', registerOwner);

module.exports = router;