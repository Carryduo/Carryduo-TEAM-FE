import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import {
  Champion,
  ChampionMostSummoner,
  IChampionMostSummoner,
  IChampions,
} from "./types";

export const useGetChampDetail = (ChampId: number) => {
  return useQuery<IChampions, ErrorHandle, Champion>(
    ["Champ", ChampId],
    () => {
      return instance.get(`/champ/${ChampId}`);
    },
    {
      select: (data) => data.data,
    }
  );
};

export const useGetMostChampSummoner = (ChampId: number) => {
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
