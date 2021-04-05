const Class = require("./../models/class");

class ClassController {
  async find(req, res, next) {
    try {
      const course_id = req.query.course_id;
      let allClass;
      if (course_id !== undefined) {
        allClass = await Class.query().where({ course_id });
      } else {
        allClass = await Class.query();
      }
      res.json(allClass);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ClassController();
