var express = require('express');
var router = express.Router();
var User = require('../models/Users');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({extended: true}));

//pulls up the registration page//sends request to users/register
router.get('/register', function(request, response){
	response.render('register');
})

//pulls up the login page//sends request to users/login
router.get('/login', function(request, response){
	response.render('login');
})

//users/logout
router.get('/logout', function(request, response){
  request.session.loggedIn = false;
  console.log("hellop");
  response.redirect('/users/login');
})

//sends request to users/id
router.get('/:id', function(request, response){
	
	var id = request.params.id
	User.findById(id).populate({path: 'compliments', populate: {path: "poster"}}).exec(function(err, profile){
	// profile.populate('poster');
	// console.log(profile.populate('poster'));
	var posterId = request.session.userId;
	// console.log(profile);
	response.render('profile', {profile: profile, poster: posterId});
	})
})




//accepts a post from the users/register
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
		request.session.loggedIn = true;
		var id = user.id;
		request.session.userId = id;
		response.redirect('/users/' + id);
	})
})

//accepts a post from users/login
router.post('/login', function(request, response){
	User.findOne({email: request.body.email}, function(error, user){
		if(user){
			bcrypt.compare(request.body.password, user.password, function(error, match){
				if(match === true){
					request.session.loggedIn = true;
					var id = user.id;
					request.session.userId = id;
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