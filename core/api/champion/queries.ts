import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import {
  Champion,
  ChampionMostSummoner,
  IChampionMostSummoner,
  IChampions,
} from "./types";

export const useGetChampDetail = (ChampId: string) => {
  return useQuery<IChampions, ErrorHandle, Champion>(["Champ", ChampId], () =>
    useChampDetail(ChampId)
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

export const useChampDetail = async (ChampId: string) => {
  const res = await instance.get(`/champ/${ChampId}`);
  return res.data;
};

export const usePositionChampDetail = async (
  ChampId: string,
  Position: string
) => {
  const res = await instance.get(`/champ/${ChampId}/position/${Position}`);
  return res.data;
};
