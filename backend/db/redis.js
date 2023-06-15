const { createClient } = require("redis");
const redisUrl = process.env.REDIS_URI;
const redisChannel = "REDIS_CHANNEL";

let redisClient;
const initializeRedis = async () => {
	redisClient = createClient({ url: redisUrl });
	await redisClient.connect();

	redisClient.on("error", (err) => console.log("Redis error: ", err));
	redisClient.on("connect", () => console.log("Connected to Redis"));
	redisClient.on("reconnecting", () => {
		console.log("Reconnecting to Redis.");
	});
};

(async () => {
	await initializeRedis();
})();

module.exports = {
	redisClient,
	initializeRedis,
	redisChannel,
};
