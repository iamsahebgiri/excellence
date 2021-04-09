const catchAsync = require('../utils/catchAsync');
const { classService } = require('../services');
const pick = require('../utils/pick');

const getClasses = catchAsync(async (req, res) => {
  const { courseId } = pick(req.query, ['courseId']);
  const result = await classService.queryClasses(courseId);
  res.send(result);
});

module.exports = {
  getClasses,
};
