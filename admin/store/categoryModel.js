import { action, thunk } from "easy-peasy";
import axios from "axios";
import config from "config/config";

const category = {
  courses: [],
  classes: [],
  subjects: [],

  addCourses: action((state, payload) => {
    state.courses = payload;
  }),

  addClasses: action((state, payload) => {
    state.classes = payload;
  }),

  addSubjects: action((state, payload) => {
    state.subjects = payload;
  }),

  getCourses: thunk(async (actions, id) => {
    const { data } = await axios.get(`${config.API_URL}/courses`);
    actions.addCourses(data);
  }),

  getClasses: thunk(async (actions, id) => {
    const { data } = await axios.get(
      `${config.API_URL}/classes?courseId=${id}`
    );
    actions.addClasses(data);
  }),

  getSubjects: thunk(async (actions, id) => {
    const { data } = await axios.get(
      `${config.API_URL}/subjects?classId=${id}`
    );
    actions.addSubjects(data);
  }),
};

export default category;
