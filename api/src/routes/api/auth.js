const express = require("express");
const auth = require("../../controllers/auth");
const {
  validateAdminRegistrationInput,
  validateAdminLoginInput,
} = require("./../../validations/auth");

const router = express.Router();

router.post("/register", validateAdminRegistrationInput(), auth.register);
router.post("/login", validateAdminLoginInput(), auth.login);

module.exports = router;
