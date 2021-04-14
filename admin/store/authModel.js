import Router from "next/router";
import { action, thunk } from "easy-peasy";
import axios from "axios";
import config from "config/config";

const authModel = {
  user: null,
  error: null,
  isSubmitting: false,

  setUser: action((state, payload) => {
    state.user = payload;
  }),

  setError: action((state, payload) => {
    state.error = payload;
  }),

  setIsSubmitting: action((state, payload) => {
    state.isSubmitting = payload;
  }),

  login: thunk(async (actions, loginData) => {
    try {
      actions.setError(null);
      actions.setIsSubmitting(true);
      const { data } = await axios.post(
        `${config.API_URL}/auth/login`,
        loginData
      );
      console.log(data);
      actions.setUser(data.user);
      localStorage.setItem("accessToken", data.tokens.access.token);
      localStorage.setItem("refreshToken", data.tokens.refresh.token);
      actions.setIsSubmitting(false);
      Router.replace("/");
    } catch (error) {
      actions.setError(error.response?.data?.message);
      actions.setIsSubmitting(false);
    }
  }),

  logout: thunk(async (actions, data) => {
    console.log("Loging out....");
    try {
      await axios.post(`${config.API_URL}/auth/logout`, {
        refreshToken: localStorage.getItem("refreshToken"),
      });
      actions.setUser(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      Router.replace("/login");
    } catch (error) {
      console.log(error.response?.data);
    }
  }),

  register: thunk(async (actions, registerData) => {
    console.log("registering....");
    try {
      actions.setError(null);
      actions.setIsSubmitting(true);
      const { data } = await axios.post(
        `${config.API_URL}/auth/register`,
        registerData
      );
      console.log(data);
      actions.setUser(data.user);
      localStorage.setItem("accessToken", data.tokens.access.token);
      localStorage.setItem("refreshToken", data.tokens.refresh.token);
      actions.setIsSubmitting(false);
      Router.replace("/");
    } catch (error) {
      console.log(error.response?.data);
      actions.setError(error.response?.data?.message);
      actions.setIsSubmitting(false);
    }
  }),
};

export default authModel;
