const express = require("express");
const questionController = require("./../../controllers/question");
const router = express.Router();

router.get("/", questionController.find);
router.get("/:id", questionController.findOne);
router.get("/count", questionController.count);
router.post("/", questionController.create);
router.delete("/:id", questionController.delete);
router.put("/:id", questionController.update);

module.exports = router;
