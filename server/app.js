var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');

	require('./db/db');

app.use(express.static(path.join(__dirname, "views")));

app.set('views', path.join(__dirname, "views"));

app.set("view engine", "hbs");

var database = [{name: "David", place: "baltimore", positiveQuote: "You can do it!", loggedIn: true},
				{name: "Mo", place: "Park Forest", positiveQuote: "Fuck yeah!", loggedIn: true}]

app.get("/profile", function(req, res){
	var index = req.query.id
	var person = database[index]
	res.render('profile', person);
})

app.get('/profile/:id', function(req, res){
	var person = database[0]
	res.render('profile', person);
})


server.listen(3000, function(){
	console.log("Your Mom");
})