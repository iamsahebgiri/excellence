const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const courseSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
});

// add plugin that converts mongoose to json
courseSchema.plugin(toJSON);

/**
 * @typedef Course
 */
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
