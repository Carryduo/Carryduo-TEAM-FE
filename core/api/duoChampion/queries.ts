import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { IDuoChamp, IDuoChamps } from "./types";

export const useGetDuoChampRank = (category: string, position: string) => {
  return useQuery<IDuoChamps, ErrorHandle, IDuoChamp[]>(
    ["DuoChampRank", category, position],
    () => getDuoChampRank(category, position)
  );
};

export const getDuoChampRank = async (category: string, position: string) => {
  const res = await instance.get(
    `/combination-stat/champ/${category}/${position}`
  );
  return res.data;
};
