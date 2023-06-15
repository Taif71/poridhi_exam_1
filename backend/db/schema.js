const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
	},
	age: {
		type: Number,
	},
	profession: {
		type: String,
	},
});
const DataModel = mongoose.model("user-info", dataSchema);
module.exports = DataModel;
