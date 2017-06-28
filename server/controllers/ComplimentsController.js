var express = require('express');
var router = express.Router();
var Compliment = require('../models/Compliments');
var bodyParser = require('body-parser');
var User = require('../models/Users');

router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(request, response){
	//grab text from request.body
	var complimentText = request.body.text;
	var compliment = new Compliment({text: complimentText});

	compliment.save();


})