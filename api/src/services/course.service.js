const { Course } = require('../models');

/**
 * Query for courses
 * @returns {Promise<QueryResult>}
 */
const queryCourses = async () => {
  const courses = await Course.find();
  return courses;
};

module.exports = {
  queryCourses,
};
