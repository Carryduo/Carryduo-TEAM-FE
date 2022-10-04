import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { IDuoChamps } from "./types";

export const useGetDuoRank = (category: string) => {
  return useQuery<IDuoChamps, ErrorHandle, IDuoChamps[]>(
    ["DuoRank", category],
    () => {
      return instance.get(`/combination-stat/${category}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
