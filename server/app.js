var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var path = require('path');
var UserProfile = require('./models/Profiles');
var bodyParser = require("body-parser");
var session = require('express-session');

	require('./db/db');

app.use(session({
	secret: "shhh, I'm a password",
	resave: false,
	saveUnitialized: true,
	cookie: {secure: false}
}));

var profilesController = require('./controllers/profilesController');
var UserController = require('./controllers/UserController');
var ComplimentsController = require('./controllers/ComplimentsController');

app.use('/profile', profilesController);
app.use('/users', UserController);
app.use('/compliments', ComplimentsController);

app.use(express.static(path.join(__dirname, "views")));

router.get('/', function(request, response){
	respon.render('login');
})

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "hbs");



server.listen(3000, function(){
	console.log("Your Mom is listening on port 3000");
})