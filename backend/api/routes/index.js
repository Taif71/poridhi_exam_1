const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.post("/save-user-data", controller.createUserData);
router.get("/get-all-users", controller.getAllUsers);
router.get("/get-user/:id", controller.getUserById);

module.exports = router;
