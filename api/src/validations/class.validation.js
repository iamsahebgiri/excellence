const Joi = require('joi');

const queryClasses = {
  query: Joi.object().keys({
    courseId: Joi.string(),
  }),
};

module.exports = {
  queryClasses,
};
