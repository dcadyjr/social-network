var express = require('express');
var router = express.Router();
var User = require('../models/Users');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/register', function(request, response){
	response.render('register');
})

router.get('/login', function(request, response){
	response.render('login');
})

router.post('/register', function(request, response){
	bcrypt.hash(request.body.password, 10, function(error, hash){
		var user = new User({
			email: request.body.email,
			password: hash,
			name: request.body.name,
			city: request.body.city,
			positiveQuote: request.body.positiveQuote,
			pic: request.body.pic
		})
		console.log(error);
		user.save();
		response.redirect('../profile');
	})
})

router.post('/login', function(request, response){
	User.findOne({email: request.body.email}, function(error, user){
		if(user){
			bcrypt.compare(request.body.password, user.password, function(error, match){
				if(match === true){
					request.session.loggedIn = true;
					response.redirect('../profile');
				}else{
					response.send("try to login again. You can do it!!");
				}
			})
		}else{
			response.send("try to login again. You can do it!!");
		}
	})
})

module.exports = router;