import axios from "axios";
import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { IChampionName } from "./types";

export const getChamps = async () => {
  const res = await instance.get("/champ");
  return res.data;
};

export const useGetChampionName = (locale?: string) => {
  return useQuery<IChampionName, ErrorHandle, string[]>(
    ["ChampName"],
    () => {
      return axios.get(`/api/locale?locale=${locale}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
