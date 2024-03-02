const express = require('express');
const  registerUser  = require('./userController');

const router = express.Router();

router.route('/').post(registerUser);

module.exports = router;