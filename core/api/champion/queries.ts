import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import {
  Champion,
  ChampionMostSummoner,
  IChampionMostSummoner,
  IChampions,
} from "./types";

export const useGetChampDetail = (ChampId: string, Position: string) => {
  return useQuery<IChampions, ErrorHandle, Champion>(
    ["Champ", ChampId, Position],
    () => useChampDetail(ChampId, Position)
  );
};

export const useGetMostChampSummoner = (ChampId: string) => {
  return useQuery<IChampionMostSummoner, ErrorHandle, ChampionMostSummoner[]>(
    ["MostSummoner", ChampId],
    () => {
      return instance.get(`/champ/${ChampId}/users`);
    },
    {
      select: (data) => data.data,
    }
  );
};

export const useChampDetail = async (ChampId: string, Position: string) => {
  const res = await instance.get(`/champ/${ChampId}/position/${Position}`);
  return res.data;
};
