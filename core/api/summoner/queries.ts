import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { ISummoner, Summoner } from "./types";

export const useGetSummoner = (summonerName: string) => {
  return useQuery<ISummoner, ErrorHandle, Summoner>(
    ["Summoner", summonerName],
    () => {
      return instance.get(`/summoner/${summonerName}`);
    },
    {
      select: (data) => data.data,
    }
  );
};

export const useRefreshSummoner = (summonerName: string) => {
  return useQuery<ISummoner, ErrorHandle, Summoner>(
    ["Summoner", summonerName],
    () => {
      return instance.get(`/summoner/refresh/${summonerName}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
