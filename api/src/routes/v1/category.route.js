const express = require('express');
// const auth = require('../../middlewares/auth');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router.route('/:categoryId').get(categoryController.getCategory);

module.exports = router;
