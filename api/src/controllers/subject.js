const Subject = require("./../models/subject");

class SubjectController {
  async find(req, res, next) {
    try {
      const class_id = req.query.class_id;
      let allSubject;
      if (class_id !== undefined) {
        allSubject = await Subject.query().where({ class_id });
      } else {
        allSubject = await Subject.query();
      }
      res.json(allSubject);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SubjectController();
