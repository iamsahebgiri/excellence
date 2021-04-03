const yup = require("yup");

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
    password: yup
      .string()
      .min(8)
      .matches(/[a-z]/, "${path} must contain at least one lowercase character")
      .matches(/[A-Z]/, "${path} must contain at least one uppercase character")
      .matches(/\d/, "${path} must contain at least one number")
      .required(),
  })
  .required();

const validateAdminRegistrationInput = (data) => {
  return adminRegistrationSchema.validate(data, {
    strict: true,
    abortEarly: false,
  });
};

const validateAdminLoginInput = (data) => {
  return adminLoginSchema.validate(data, {
    strict: true,
    abortEarly: false,
  });
};

module.exports = {
  validateAdminRegistrationInput,
  validateAdminLoginInput,
};
