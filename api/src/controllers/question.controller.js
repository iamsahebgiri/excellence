const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { questionService } = require('../services');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');

const getQuestions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await questionService.queryQuestions(filter, options);
  res.send(result);
});

const createQuestion = catchAsync(async (req, res) => {
  const questionBody = { creator: req.user._id, ...req.body };
  const result = await questionService.createQuestion(questionBody);
  res.status(httpStatus.CREATED).send(result);
});

const getQuestion = catchAsync(async (req, res) => {
  const question = await questionService.getPopulatedQuestionById(req.params.questionId);
  if (!question) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
  }
  res.send(question);
});

const updateQuestion = catchAsync(async (req, res) => {
  const user = await questionService.updateQuestionById(req.params.questionId, req.body);
  res.send(user);
});

const deleteQuestion = catchAsync(async (req, res) => {
  await questionService.deleteQuestionById(req.params.questionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getQuestions,
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
};
