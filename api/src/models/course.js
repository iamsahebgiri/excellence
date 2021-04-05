const { Model } = require("objection");

class Course extends Model {
  static get tableName() {
    return "course";
  }
}

module.exports = Course;
