import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { Champions, IChampions } from "./types";

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
