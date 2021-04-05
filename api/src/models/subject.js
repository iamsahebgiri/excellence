const { Model } = require("objection");

class Subject extends Model {
  static get tableName() {
    return "subject";
  }
}

module.exports = Subject;
