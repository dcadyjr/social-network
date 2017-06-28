var mongoose = require('mongoose');

var ComplimentSchema = new mongoose.Schema({

	text: String,
	poster: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

var complimentModel = mongoose.model("Compliment", ComplimentSchema);

module.exports = complimentModel;