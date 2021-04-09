const catchAsync = require('../utils/catchAsync');
const { subjectService } = require('../services');
const pick = require('../utils/pick');

const getSubjects = catchAsync(async (req, res) => {
  const { classId } = pick(req.query, ['classId']);
  const result = await subjectService.querySubjects(classId);
  res.send(result);
});

module.exports = {
  getSubjects,
};
