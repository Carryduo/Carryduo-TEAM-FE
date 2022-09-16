import axios from "axios";
import { getCookie } from "../../util/servers/cookie";

export const instance = axios.create({
  baseURL: "https://erunjrun.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((config: any) => {
  config.headers.common["authorization"] = `Bearer ${getCookie("myToken")}`;
  return config;
});
