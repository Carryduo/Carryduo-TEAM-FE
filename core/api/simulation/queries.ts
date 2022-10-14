import { useQuery } from "react-query";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import { ISimulation, SimulationResult } from "./types";

export const useGetSimulationResult = (
  category: string,
  champ1Id: number,
  champ2Id: number,
  champ3Id: number,
  champ4Id: number
) => {
  return useQuery<ISimulation, ErrorHandle, SimulationResult>(
    [`getMyProfile`, category, champ1Id, champ2Id, champ3Id, champ4Id],
    () => {
      return instance.get(`/simulation/${category}`, {
        params: {
          champ1Id,
          champ2Id,
          champ3Id,
          champ4Id,
        },
      });
    },
    {
      select: (data) => data.data,
    }
  );
};
