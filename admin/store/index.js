import { createStore, persist } from "easy-peasy";
import authModel from "./authModel";
import categoryModel from "./categoryModel";

const store = createStore({
  category: categoryModel,
  auth: persist(authModel, { storage: "localStorage" }),
});

export default store;
