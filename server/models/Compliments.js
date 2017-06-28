var mongoose = require('mongoose');

var ComplimentSchema = new mongoose.Schema({

	text: String
});

var complimentModel = mongoose.model("compliment", ComplimentSchema);

module.exports = complimentModel;