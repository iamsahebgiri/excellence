const express = require("express");
const user = require("./../../controllers/user");
const router = express.Router();

router.get("/:id", user.findOne);
router.delete("/:id", user.delete);
router.put("/:id", user.update);

module.exports = router;
