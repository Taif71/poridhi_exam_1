const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./db/mongodb");
const { initializeRedis } = require("./db/redis");
const router = require("./api/routes");

// express app configurations setup 
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectToDatabase()
initializeRedis()

// routes
app.use("/api", router);
app.get("/", () => {
	res.send("Backend Server working properyl!");
});

// server port listening to
app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});
