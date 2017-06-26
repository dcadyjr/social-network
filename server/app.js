var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');
var UserProfile = require('../models/Profiles');

	require('./db/db');

app.use(express.static(path.join(__dirname, "views")));

app.set('views', path.join(__dirname, "views"));

app.set("view engine", "hbs");


app.get("/profile", function(req, res){
	var index = req.query.id
	var person = database[index]
	res.render('profile', person);
})

app.get('/profile/:id', function(req, res){
	var person = database[0]
	res.render('profile', person);
})

app.post('/profile/:id', function(request, response){
	console.log(request.body);

	var profile = new UserProfile({
		name: request.body.name,
		city: request.body.city,
		positiveQuote: request.body.positiveQuote,
		website: request.body.website,
		pic: request.body.pic
	})

	profile.save();
	respond.send('success');

})

app.patch('/profile/:id', function(request, response){

})

app.delete('/profile/:id', functin(request, response){

})


server.listen(3000, function(){
	console.log("Your Mom");
})