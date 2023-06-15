const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./db/mongodb");
const { initializeRedis } = require("./db/redis");

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectToDatabase()
initializeRedis()

app.get("/", (req, res) => {
	res.send("Worker Server working properly!");
});

app.listen(process.env.PORT, () => {
	console.log(`Worker Server Listening at http://localhost:${process.env.PORT}`);
});
