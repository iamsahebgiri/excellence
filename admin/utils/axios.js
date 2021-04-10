import axios from "axios";

axios.interceptors.request.use(
  async (req) => {
    // const expireAt = localStorage.getItem("expiresAt");
    // let token = localStorage.getItem("authToken");
    // if (dayjs(expireAt).diff(dayjs()) < 1) {
    //   const data = onGetForcedToken();
    //   token = typeof data === "string" ? data : await data();
    // }
    // // setting updated token
    // localStorage.setItem("authToken", token);
    return req;
  },
  (err) => {
    console.log("error in getting ", err);
  }
);


export default axios;