const catchAsync = require('../utils/catchAsync');
const { courseService } = require('../services');

const getCourses = catchAsync(async (req, res) => {
  const result = await courseService.queryCourses();
  res.send(result);
});

module.exports = {
  getCourses,
};
