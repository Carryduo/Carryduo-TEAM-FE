import { useQuery } from "react-query";
import { ErrorHandle } from "../config/ErrorType";
import { instance } from "./axios";
import { DuoChampion } from "./duoChampDetail";

interface IDuoChamp {
  id: string;
  category: number;
  tier: number;
  winrate: string;
  sampleNum: number;
  mainChampId: DuoChampion;
  subChampId: DuoChampion;
}

export interface IDuoChamps {
  data: IDuoChamp[];
}

export const useGetDuoRank = (category: string) => {
  return useQuery<IDuoChamps, ErrorHandle, IDuoChamp[]>(
    ["DuoRank", category],
    () => {
      return instance.get(`/combination-stat/${category}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
