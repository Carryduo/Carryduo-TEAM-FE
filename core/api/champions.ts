import { useQuery } from "react-query";
import { ErrorHandle } from "../config/ErrorType";
import { instance } from "./axios";

export interface Champions {
  id: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
}

export interface IChampions {
  data: Champions[];
}

export const useGetChamps = () => {
  return useQuery<IChampions, ErrorHandle, Champions[]>(
    ["Champs"],
    () => {
      return instance.get("/champ");
    },
    {
      select: (data) => data.data,
    }
  );
};
