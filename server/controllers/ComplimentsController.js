var express = require('express');
var router = express.Router();
var Compliment = require('../models/Compliments');
var bodyParser = require('body-parser');
var User = require('../models/Users');

router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(request, response){
	//grab text from request.body
	var complimentText = request.body.text;
	
	var posterId = request.body.posterId;

	var compliment = new Compliment({text: complimentText, poster: posterId, receiver: request.body.userId});

	compliment.save();

	User.findById(request.body.userId, function(error, user){

		var complimentId = compliment.id;

		user.compliments.push(complimentId);

		user.save();

		User.findById(request.body.posterId, function(error, poster){

			var complimentId = compliment.id;
			poster.gaveCompliments.push(complimentId);

			poster.save();

			response.redirect(request.get('referer'));
		})
	
	})
})

module.exports = router;