var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	city: String,
	positiveQuote: String,
	pic: String,
	compliments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Compliment'}],
	gaveCompliments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Compliment'}]
});

module.exports = mongoose.model('User', UserSchema);