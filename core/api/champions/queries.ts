import axios from "axios";
import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { Champions, IChampionName, IChampions } from "./types";

export const useGetChamps = () => {
  return useQuery<IChampions, ErrorHandle, Champions[]>(
    ["Champs"],
    () => {
      return instance.get("/champ");
    },
    {
      select: (data) => data.data,
    }
  );
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
