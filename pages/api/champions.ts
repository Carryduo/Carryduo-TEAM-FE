import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

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
      return axios.get("https://62a09c0fa9866630f8134879.mockapi.io/champions");
    }
  );
};
