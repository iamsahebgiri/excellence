const User = require("../models/user");
const {
  validateAdminRegistrationInput,
  validateAdminLoginInput,
} = require("./../validations/auth");
const { createJwtToken } = require("./../utils/token");
const { hashPassword, validatePassword } = require("../utils/auth");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  const adminUser = {
    name,
    email,
    password,
  };

  try {
    await validateAdminRegistrationInput(adminUser);

    const existingUser = await User.query().where({ email }).first();

    if (existingUser) {
      const error = new Error("Email in use.");
      res.status(403);
      throw error;
    }

    const hashedPassword = hashPassword(password);
    const insertedUser = await User.query().insert({
      name,
      email,
      password: hashedPassword,
    });

    delete insertedUser.password;

    const payload = {
      id: insertedUser.id,
      name,
      email,
    };

    const token = await createJwtToken(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await validateAdminLoginInput({ email, password });

    const user = await User.query().where({ email }).first();
    if (!user) {
      const error = new Error("Invalid username/password.");
      res.status(403);
      throw error;
    }

    const validPassword = await validatePassword(user.password, password);
    if (!validPassword) {
      const error = new Error("Invalid username/password.");
      res.status(403);
      throw error;
    }

    const payload = {
      id: user.id,
      name: user.name,
      email,
    };
    const token = await createJwtToken(payload);
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
