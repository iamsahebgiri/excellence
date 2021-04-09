const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createQuestion = {
  body: Joi.object().keys({
    questionText: Joi.string().required(),
    questionType: Joi.string().valid('objective', 'subjective'),
    solution: Joi.string(),
    optionA: Joi.string(),
    optionB: Joi.string(),
    optionC: Joi.string(),
    optionD: Joi.string(),
    optionE: Joi.string(),
    correctOption: Joi.string().valid('a', 'b', 'c', 'd', 'e'),
    rightMark: Joi.number().required().min(0),
    wrongMark: Joi.number().max(0),
    difficultyLevel: Joi.string().valid('beginner', 'easy', 'normal', 'hard', 'very hard'),
    subjectId: Joi.string(),
    creator: Joi.string(),
  }),
};

const getQuestion = {
  params: Joi.object().keys({
    questionId: Joi.string().custom(objectId),
  }),
};

const updateQuestion = {
  params: Joi.object().keys({
    questionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      questionText: Joi.string(),
      questionType: Joi.string().valid('objective', 'subjective'),
      solution: Joi.string(),
      optionA: Joi.string(),
      optionB: Joi.string(),
      optionC: Joi.string(),
      optionD: Joi.string(),
      optionE: Joi.string(),
      correctOption: Joi.string().valid('a', 'b', 'c', 'd', 'e'),
      rightMark: Joi.number().min(0),
      wrongMark: Joi.number().max(0),
      difficultyLevel: Joi.string().valid('beginner', 'easy', 'normal', 'hard', 'very hard'),
      subjectId: Joi.string(),
    })
    .min(1),
};

const deleteQuestion = {
  params: Joi.object().keys({
    questionId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
};
