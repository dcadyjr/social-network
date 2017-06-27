var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');
var UserProfile = require('./models/Profiles');
var bodyParser = require("body-parser");

	require('./db/db');

app.use(express.static(path.join(__dirname, "views")));

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "hbs");


app.get("/profile", function(request, response){
	
	response.render('profile', person);
})

app.get('/profile/:id', function(request, response){
	
	var id = request.params.id
	UserProfile.findById(id, function(err, profile){
	response.render('profile', profile);

	})
	
})

app.post('/profile', function(request, response){
	console.log(request.body);

	var profile = new UserProfile({
		name: request.body.name,
		city: request.body.city,
		positiveQuote: request.body.positiveQuote,
		website: request.body.website,
		pic: request.body.pic
	})

	profile.save();
	response.send('success');

})

app.patch('/profile/:id', function(request, response){
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

app.delete('/profile/:id', function(request, response){

	var id = request.params.id;
	UserProfile.findById(id, function(err, profile){
		profile.remove();
		response.json('success');
	})
})


server.listen(3000, function(){
	console.log("Your Mom is listening on port 3000");
})