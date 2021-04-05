const express = require("express");
const userController = require("./../../controllers/user");
const router = express.Router();

router.get("/:id", userController.findOne);
router.delete("/:id", userController.delete);
router.put("/:id", userController.update);

module.exports = router;
