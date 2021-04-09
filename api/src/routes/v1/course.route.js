const express = require('express');
const { courseController } = require('../../controllers');

const router = express.Router();

router.route('/').get(courseController.getCourses);

module.exports = router;
