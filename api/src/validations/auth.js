const yup = require("yup");
const ApiError = require("../middleware/ApiError");

const adminRegistrationSchema = yup
  .object()
  .shape({
    email: yup.string().email().lowercase().required(),
    name: yup.string().min(1).required(),
    password: yup
      .string()
      .min(8)
      .matches(/[a-z]/, "${path} must contain at least one lowercase character")
      .matches(/[A-Z]/, "${path} must contain at least one uppercase character")
      .matches(/\d/, "${path} must contain at least one number")
      .required(),
  })
  .required();

const adminLoginSchema = yup
  .object()
  .shape({
    email: yup.string().email().lowercase().required(),
    password: yup.string().required(),
  })
  .required();

const validateAdminRegistrationInput = () => {
  return async (req, res, next) => {
    try {
      const validatedBody = await adminRegistrationSchema.validate(req.body, {
        strict: true,
      });
      req.body = validatedBody;
      next();
    } catch (err) {
      next(ApiError.validationError(err.message, err.errors));
    }
  };
};

const validateAdminLoginInput = () => {
  return async (req, res, next) => {
    try {
      const validatedBody = await adminLoginSchema.validate(req.body, {
        strict: true,
      });
      req.body = validatedBody;
      next();
    } catch (err) {
      next(ApiError.validationError(err.message, err.errors));
    }
  };
};

module.exports = {
  validateAdminRegistrationInput,
  validateAdminLoginInput,
};
