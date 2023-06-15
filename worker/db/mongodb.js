const { default: mongoose } = require("mongoose");

const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const db = mongoose.connection;
		db.on("error", (err) => {
			console.log(err);
		});
		db.once("open", () => {
			console.log("db connected");
		});
		console.log("db connected");
	} catch (error) {
		console.log(error);
	}
};

(async () => {
	await connectToDatabase();
})();

module.exports = {
	connectToDatabase
};
