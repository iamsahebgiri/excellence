const catchAsync = require('../utils/catchAsync');

const getCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = { message: categoryId };
  res.send(result);
});

module.exports = {
  getCategory,
};
