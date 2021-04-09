const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { questionService } = require('../services');
const ApiError = require('../utils/ApiError');

const getQuestions = catchAsync(async (req, res) => {
  const result = await questionService.queryQuestions();
  res.send(result);
});

const createQuestion = catchAsync(async (req, res) => {
  const questionBody = { creator: req.user._id, ...req.body };
  const result = await questionService.createQuestion(questionBody);
  res.status(httpStatus.CREATED).send(result);
});

const getQuestion = catchAsync(async (req, res) => {
  const question = await questionService.getQuestionById(req.params.questionId);
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
