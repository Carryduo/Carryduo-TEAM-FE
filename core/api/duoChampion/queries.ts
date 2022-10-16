import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { IDuoChamp, IDuoChamps } from "./types";


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