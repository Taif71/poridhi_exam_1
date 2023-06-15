const MongodbModel = require("./db/schema");

const saveDataToDatabase = async (data) => {
	try {
		const { username, age, profession } = data;
		const dbPayload = {
			username, age, profession
		}
		const isUserExist = await MongodbModel.findOne({ username: username }).lean();
		if (!isUserExist) {
			const result = (await MongodbModel.create(dbPayload)).toObject();
			return result;
		}
	} catch (error) {
		console.log(error.message);
		return error.message;
	}
};

module.exports = {
	saveDataToDatabase,
};
