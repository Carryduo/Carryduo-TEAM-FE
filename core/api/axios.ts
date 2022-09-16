import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "../../util/servers/cookie";

export const instance = axios.create({
  baseURL: "https://erunjrun.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers === undefined) return;
  config.headers["authorization"] = `Bearer ${getCookie("myToken")}`;
  return config;
});
