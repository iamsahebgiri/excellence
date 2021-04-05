const Course = require("./../models/course");

class CourseController {
  async find(req, res, next) {
    try {
      const allCourse = await Course.query();
      res.json(allCourse);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CourseController();
