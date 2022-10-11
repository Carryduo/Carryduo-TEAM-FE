import axios from "axios";
import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { Champions, IChampions } from "./types";

export const useGetChamps = (locale?: string) => {
  return useQuery<IChampions, ErrorHandle, Champions[]>(
    ["Champs"],
    () => {
      return axios.get(`/api/locale?locale=${locale}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
