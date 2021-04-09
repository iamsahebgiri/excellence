const Joi = require('joi');

const querySubjects = {
  query: Joi.object().keys({
    classId: Joi.string(),
  }),
};

module.exports = {
  querySubjects,
};
