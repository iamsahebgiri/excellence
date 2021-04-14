import axios from "axios";
// import config from "config/config";
// import Router from "next/router";

axios.interceptors.request.use(
  (req) => {
    req.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return req;
  },
  (err) => {
    console.log("Error in getting: ", err);
  }
);

// function createAxiosResponseInterceptor() {
//   const interceptor = axios.interceptors.response.use(
//     (res) => res,
//     (err) => {
//       console.log(err.response);
//       // Reject promise if usual error
//       if (err.response.status !== 401) {
//         return Promise.reject(err);
//       }

//       console.log("fetching access token...");
//       axios.interceptors.response.eject(interceptor);

//       return axios
//         .post(`${config.API_URL}/auth/refresh-tokens`, {
//           refreshToken: localStorage.getItem("refreshToken"),
//         })
//         .then((response) => {
//           localStorage.setItem("accessToken", response.tokens.access.token);
//           localStorage.setItem("refreshToken", response.tokens.refresh.token);
//           error.response.config.headers["Authorization"] =
//             "Bearer " + response.tokens.access.token;
//           return axios(error.response.config);
//         })
//         .catch((error) => {
//           localStorage.clear();
//           Router.replace("/login");
//           return Promise.reject(error);
//         })
//         .finally(createAxiosResponseInterceptor);
//     }
//   );
// }

// createAxiosResponseInterceptor();

export default axios;
