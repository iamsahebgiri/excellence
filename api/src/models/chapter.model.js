const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const chapterSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
  subjectId: {
    type: Number,
    ref: 'Subject',
    required: true,
  },
});

// add plugin that converts mongoose to json
chapterSchema.plugin(toJSON);

/**
 * @typedef Chapter
 */
const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
