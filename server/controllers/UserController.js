var express = require('express');
var router = express.Router();
var User = require('../models/Users');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/register', function(request, response){
	response.render('register');
})

module.exports = router;