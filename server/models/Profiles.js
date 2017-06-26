var mongoose = ('mongoose');

var ProfileSchema = new mongoose.Schema({

	name: String,
	city: String,
	positiveQuote: String,
	website: String,
	pic: String,
})

var profileModel = mongoose.model("Profiles", ProfileSchema);

module.exports = profileModel;