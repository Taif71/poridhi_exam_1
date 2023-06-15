const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./db/mongodb");
const router = require("./api/routes");
const { initializeRedis } = require("./db/redis");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


connectToDatabase()
initializeRedis()


app.use("/api", router);
app.get("/", (req, res) => {
	res.send("Backend Server!");
});

app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});