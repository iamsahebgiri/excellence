const express = require('express');
const { questionController } = require('../../controllers');
const { questionValidation } = require('../../validations');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .get(questionController.getQuestions)
  .post(auth('manageQuestions'), validate(questionValidation.createQuestion), questionController.createQuestion);

router
  .route('/:questionId')
  .get(validate(questionValidation.getQuestion), questionController.getQuestion)
  .patch(auth('manageQuestions'), validate(questionValidation.updateQuestion), questionController.updateQuestion)
  .delete(auth('manageQuestions'), validate(questionValidation.deleteQuestion), questionController.deleteQuestion);

module.exports = router;
