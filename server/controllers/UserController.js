var express = require('express');
var router = express.Router();
var User = require('../models/Users');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({extended: true}));

//pulls up the registration page
router.get('/register', function(request, response){
	response.render('register');
})

//pulls up the login page
router.get('/login', function(request, response){
	response.render('login');
})

router.get('/:id', function(request, response){
	
	var id = request.params.id
	User.findById(id, function(err, profile){
	response.render('profile', profile);

	})
})

//accepts a post from the register page
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
		user.save();
		var id = request.params.id;
		response.redirect('/' + id);
	})
})

//accepts a post from the register page
router.post('/login', function(request, response){
	User.findOne({email: request.body.email}, function(error, user){
		if(user){
			bcrypt.compare(request.body.password, user.password, function(error, match){
				if(match === true){
					request.session.loggedIn = true;
					var id = user.id;
					console.log(id);
					response.redirect('/users/' + id);
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