const { Class } = require('../models');

/**
 * Query for classes
 * @returns {Promise<QueryResult>}
 */
const queryClasses = async (courseId) => {
  let classes;
  if (courseId !== undefined) {
    classes = await Class.find({ courseId });
  } else {
    classes = await Class.find();
  }
  return classes;
};

module.exports = {
  queryClasses,
};
