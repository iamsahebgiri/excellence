const { Model } = require("objection");

class Class extends Model {
  static get tableName() {
    return "class";
  }
}

module.exports = Class;
