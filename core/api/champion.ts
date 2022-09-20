import axios from "axios";
import { useQuery } from "react-query";
import { instance } from "./axios";

interface ChampionSpells {
  id: string;
  description:string;
  name: string;
  sillImg: string;
  tootip: string;
}

export interface Champion {
  id: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
  skill: ChampionSpells[];
}

interface IChampions {
  data: Champion;
}

export const useGetChampDetail = (id: number) => {
  return useQuery<IChampions>(["Champ", id], () => {
    return instance.get(`/champ/${id}`);
  });
};
