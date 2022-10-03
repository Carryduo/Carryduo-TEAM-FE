import { useQuery } from "react-query";
import { ErrorHandle } from "../config/ErrorType";
import { instance } from "./axios";

export interface DuoChampion {
  champId: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
}

interface IDuoChamp {
  id: string;
  category: string;
  winrate: number;
  sampleNum: number;
  subChampId: DuoChampion;
}

export interface IDuoChamps {
  data: IDuoChamp[];
}

export const useGetDuoChampRank = (category: string, position: string) => {
  return useQuery<IDuoChamps, ErrorHandle, IDuoChamp[]>(
    ["DuoChampRank", category, position],
    () => {
      return instance.get(`/combination-stat/champ/${category}/${position}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
