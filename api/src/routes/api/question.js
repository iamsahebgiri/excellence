const express = require("express");
const question = require("./../../controllers/question");
const router = express.Router();

router.get("/", question.find);
router.get("/:id", question.findOne);
router.get("/count", question.count);
router.post("/", question.create);
router.delete("/:id", question.delete);
router.put("/:id", question.update);

module.exports = router;
