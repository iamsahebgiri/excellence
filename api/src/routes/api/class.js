const express = require("express");
const classController = require("./../../controllers/class");
const router = express.Router();

router.get("/", classController.find);

module.exports = router;
