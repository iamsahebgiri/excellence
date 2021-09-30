const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const questionSchema = mongoose.Schema(
  {
    questionText: {
      type: String,
      required: true,
      index: true,
    },
    questionType: {
      type: String,
      enum: ['objective', 'subjective'],
      default: 'objective',
    },
    solution: {
      type: String,
    },
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
    optionE: String,
    correctOption: {
      type: String,
      enum: ['a', 'b', 'c', 'd', 'e'],
    },
    rightMark: {
      type: Number,
      required: true,
    },
    wrongMark: Number,
    difficultyLevel: {
      type: String,
      enum: ['beginner', 'easy', 'normal', 'hard', 'very hard'],
      default: 'beginner',
    },
    subjectId: {
      type: Number,
      ref: 'Subject',
    },
    classId: {
      type: Number,
      ref: 'Class',
    },
    courseId: {
      type: Number,
      ref: 'Course',
    },
    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
questionSchema.plugin(toJSON);
questionSchema.plugin(paginate);

/**
 * @typedef Question
 */
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
