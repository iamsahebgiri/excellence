const { Subject } = require('../models');

/**
 * Query for subjects
 * @returns {Promise<QueryResult>}
 */
const querySubjects = async (classId) => {
  let subjects;
  if (classId !== undefined) {
    subjects = await Subject.find({ classId });
  } else {
    subjects = await Subject.find();
  }
  return subjects;
};

module.exports = {
  querySubjects,
};
