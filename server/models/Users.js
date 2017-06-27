var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	city: String,
	positiveQuote: String,
	website: String,
	pic: String
});

module.exports = mongoose.model('User', UserSchema);