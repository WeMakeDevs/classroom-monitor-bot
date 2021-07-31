const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const ConfigSchema = new Schema({
	_id: String,
	forbiddenWords: [String],
});

const Configuration = mongoose.model('Configuration', ConfigSchema);

module.exports = { Configuration };
