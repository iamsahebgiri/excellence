const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const classSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
  courseId: {
    type: Number,
    ref: 'Course',
    required: true,
  },
});

// add plugin that converts mongoose to json
classSchema.plugin(toJSON);

/**
 * @typedef Class
 */
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
