const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	key: {
		type: String,
		trim: true,
		unique: true,
	},
	value: {
		type: String,
	},
});
const DataModel = mongoose.model("user-infos", dataSchema);
module.exports = DataModel;
