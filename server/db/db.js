var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/userProfiles';

//tells mongoose where the db is
mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log("connected to" + connectionString);
})

mongoose.connection.on('error', function(error){
	console.log('mongodb error' + error);
})

mongoose.connection.on('disconnected', function(){
	console.log("Mongoose disconnected from" + connectionString);
})
