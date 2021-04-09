const express = require('express');
const { subjectController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { subjectValidation } = require('../../validations');

const router = express.Router();

router.route('/').get(validate(subjectValidation.querySubjects), subjectController.getSubjects);

module.exports = router;
