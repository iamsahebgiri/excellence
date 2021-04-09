const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const subjectSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
  classId: {
    type: Number,
    ref: 'Class',
    required: true,
  },
});

// add plugin that converts mongoose to json
subjectSchema.plugin(toJSON);

/**
 * @typedef Subject
 */
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
