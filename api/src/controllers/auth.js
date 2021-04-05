const User = require("../models/user");
const ApiError = require("./../middleware/ApiError");
const { createJwtToken } = require("./../utils/token");
const { hashPassword, validatePassword } = require("../utils/auth");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.query().where({ email }).first();

    if (existingUser) {
      next(ApiError.uniqueViolationError("email in use."));
      return;
    }

    const hashedPassword = await hashPassword(password);
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
    const user = await User.query().where({ email }).first();
    if (!user) {
      next(ApiError.badRequest("Invalid email."));
      return;
    }

    const validPassword = await validatePassword(user.password, password);

    if (!validPassword) {
      next(ApiError.badRequest("Invalid passowrd."));
      return;
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
