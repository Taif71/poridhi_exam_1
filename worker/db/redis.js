const { createClient } = require("redis");
const { saveDataToDatabase } = require("../pub-sub");
const redisUrl = process.env.REDIS_URI;
const redisChannel = "REDIS_CHANNEL";

let redisClient;
let subscriber;
const initializeRedis = async () => {
	redisClient = createClient({ url: redisUrl });
	redisClient.on("error", (error) => console.error(`Error : ${error}`));
	await redisClient.connect();
	
	subscriber = redisClient;
	subscriber.on("error", (err) => console.log("Redis error", err));
	subscriber.on("connect", () => console.log("Connected to Redis"));
	subscriber.on("reconnecting", () => {
		console.log("Reconnecting to Redis.");
	});
	subscriber.on("ready", () => {
		console.log("subscriber is ready for action!");
		subscriber.subscribe(redisChannel, async (data) => {
			console.log("subscriber service:- ", data);
			try {
				return await saveDataToDatabase(JSON.parse(data));
			} catch (error) {
				console.log({ error });
			}
		});
	});
};

(async () => {
	await initializeRedis();
})();

module.exports = {
	redisClient,
	subscriber,
	initializeRedis,
	redisChannel,
};
