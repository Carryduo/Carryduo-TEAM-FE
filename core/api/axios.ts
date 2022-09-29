import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "../../util/servers/cookie";

export const instance = axios.create({
  baseURL: "https://erunjrun.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const MockApi = axios.create({
  baseURL: "https://62a09c0fa9866630f8134879.mockapi.io/",
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers === undefined) return;
  config.headers["authorization"] = `Bearer ${getCookie("myToken")}`;
  return config;
});

instance.interceptors.response.use((res) => {
  return res;
});
