import { action, thunk } from "easy-peasy";
import axios from "@/utils/axios";

const category = {
  courses: [],
  classes: [],
  subjects: [],

  addClasses: action((state, payload) => {
    state.classes = payload;
  }),

  addSubjects: action((state, payload) => {
    state.subjects = payload;
  }),

  getClasses: thunk(async (actions, id) => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/classes?course_id=${id}`
    );
    actions.addClasses(data);
  }),

  getSubjects: thunk(async (actions, id) => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/subjects?class_id=${id}`
    );
    actions.addSubjects(data);
  }),
};

export default category;
