const express = require('express');
const { classController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { classValidation } = require('../../validations');

const router = express.Router();

router.route('/').get(validate(classValidation.queryClasses), classController.getClasses);

module.exports = router;
