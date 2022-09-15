import axios from "axios";

export const instance = axios.create({
  baseURL: "https://erunjrun.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
