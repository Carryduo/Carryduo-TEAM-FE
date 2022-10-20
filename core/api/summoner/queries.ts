import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { ISummoner, Summoner } from "./types";

export const useGetSummoner = (summonerName: string) => {
  return useQuery<ISummoner, ErrorHandle, Summoner>(
    ["Summoner", summonerName],
    () => getSummoner(summonerName)
  );
};

export const getSummoner = async (summonerName: string) => {
  const res = await instance.get(`/summoner/${encodeURI(summonerName)}`);
  return res.data;
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
