import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { instance } from "../../core/api/axios";

interface Champions {
  name: string;
  id: string;
}

interface IChampions {
  data: Champions[];
}

export const useChampions = () => {
  return useQuery<IChampions, AxiosError, IChampions>(
    ["getChampionsData"],
    () => {
      return instance.get("/champions");
    }
  );
};
