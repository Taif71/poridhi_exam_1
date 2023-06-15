const DataModel = require("./db/schema");

const saveDatabyRedis = async (data) => {
	try {
		const { username, age, profession } = data;
		const dbPayload = {
			username, age, profession
		}
		const result = (await DataModel.create(dbPayload)).toObject();
		return result;
	} catch (error) {
		console.log(error.message);
		return error.message;
	}
};

module.exports = {
	saveDatabyRedis,
};
