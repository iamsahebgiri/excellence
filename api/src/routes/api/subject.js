const express = require("express");
const subjectController = require("./../../controllers/subject");
const router = express.Router();

router.get("/", subjectController.find);

module.exports = router;
