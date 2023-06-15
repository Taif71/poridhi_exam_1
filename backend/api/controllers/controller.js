const { redisClient, redisChannel } = require("../../db/redis");
const MongodbModel = require("../../db/schema");

const sendResponse = async (res, data, err) => {
	if (data) {
		res.status(200).json({ success: true, data });
	} else {
		console.log(err);
		res.status(500).json({ success: false, data: null });
	}
};

const createUserData = async (req, res, next) => {
	try {
		await redisClient.publish(
			redisChannel,
			JSON.stringify(req.body)
		);
		return await sendResponse(res, { data: "Success" });
	} catch (error) {
		return await sendResponse(res, null, error);
	}
};

const getAllUsers = async (req, res, next) => {
	try {
		const data = await MongodbModel.find({}).lean();
		return await sendResponse(res, data);
	} catch (error) {
		return await sendResponse(res, null, error);
	}
};

const getUserById = async (req, res, next) => {
	try {
		const { id } = req.params;

		let data = await redisClient.get(id);
		if (data) {
			return await sendResponse(res, JSON.parse(data));
		}
		data = await MongodbModel.findOne({ _id: id }).lean();
		if (data) {
			await redisClient.set(id, JSON.stringify(data));
			return await sendResponse(res, data);
		} else {
			return await sendResponse(res, { data: "No data was found with this id" });
		}
	} catch (error) {
		return await sendResponse(res, null, error);
	}
};

module.exports = {
	createUserData,
	getAllUsers,
	getUserById
};
