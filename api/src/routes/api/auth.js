const express = require("express");
const authController = require("../../controllers/auth");
const {
  validateAdminRegistrationInput,
  validateAdminLoginInput,
} = require("./../../validations/auth");

const router = express.Router();

router.post("/register", validateAdminRegistrationInput(), authController.register);
router.post("/login", validateAdminLoginInput(), authController.login);

module.exports = router;
