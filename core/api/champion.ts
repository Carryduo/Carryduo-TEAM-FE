import { useQuery } from "react-query";
import { instance } from "./axios";

interface ChampionSpells {
  id: string;
  description: string;
  name: string;
  image: string;
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

interface ChampionMostSummoner {
  id: string;
  nickname: string;
  profileImg: string;
  tier: string;
}
interface IChampionMostSummoner {
  data: ChampionMostSummoner[];
}

export const useGetChampDetail = (ChampId: number) => {
  return useQuery<IChampions>(["Champ", ChampId], () => {
    return instance.get(`/champ/${ChampId}`);
  });
};

export const useGetMostChampSummoner = (ChampId: number) => {
  return useQuery<IChampionMostSummoner>(["MostSummoner", ChampId], () => {
    return instance.get(`/champ/${ChampId}/users`);
  });
};
