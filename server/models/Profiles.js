var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({

	name: String,
	city: String,
	positiveQuote: String,
	pic: String
})

var profileModel = mongoose.model("Profiles", ProfileSchema);

module.exports = profileModel;