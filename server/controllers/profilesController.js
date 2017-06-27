var express = require('express');
var router = express.Router();
var UserProfile = require('../models/Profiles');
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));

router.get("/", function(request, response){
	
	response.render('profile');
})

router.get('/:id', function(request, response){
	
	var id = request.params.id
	UserProfile.findById(id, function(err, profile){
	response.render('profile', profile);

	})
})

router.post('/', function(request, response){
	console.log(request.body);

	var profile = new UserProfile({
		name: request.body.name,
		city: request.body.city,
		positiveQuote: request.body.positiveQuote,
		website: request.body.website,
		pic: request.body.pic
	})

	profile.save();
	response.redirect('../profile');

})

router.patch('/:id', function(request, response){
	var id = request.params.id;
	UserProfile.findById(id, function(err, profile){
		profile.name = request.body.name;
		profile.city = request.body.city;
		profile.positiveQuote = request.body.positiveQuote;
		profile.website = request.body.website;
		profile.pic = request.body.pic;

		profile.save();
		response.json(profile);
	})

})

router.delete('/:id', function(request, response){

	var id = request.params.id;
	UserProfile.findById(id, function(err, profile){
		profile.remove();
		response.json('success');
	})
})

module.exports = router;