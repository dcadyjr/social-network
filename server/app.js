var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');
var UserProfile = require('./models/Profiles');
var bodyParser = require("body-parser");

	require('./db/db');

var profilesController = require('./controllers/profilesController');
var UserController = require('./controllers/UserController');

app.use('/profile', profilesController);
app.use('/users', UserController);

app.use(express.static(path.join(__dirname, "views")));


app.set('views', path.join(__dirname, "views"));
app.set("view engine", "hbs");



server.listen(3000, function(){
	console.log("Your Mom is listening on port 3000");
})