const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const categorySchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
  weight: String,
  parent: {
    type: Number,
    ref: 'Category',
  },
});

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);

/**
 * @typedef Category
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
