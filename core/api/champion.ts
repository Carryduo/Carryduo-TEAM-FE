import { AxiosError } from "axios";
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
  tier: number;
}
interface IChampionMostSummoner {
  data: ChampionMostSummoner[];
}

export const useGetChampDetail = (ChampId: number) => {
  return useQuery<IChampions, AxiosError, Champion>(
    ["Champ", ChampId],
    () => {
      return instance.get(`/champ/${ChampId}`);
    },
    {
      select: (data) => data.data,
    }
  );
};

export const useGetMostChampSummoner = (ChampId: number) => {
  return useQuery<IChampionMostSummoner, AxiosError, ChampionMostSummoner[]>(
    ["MostSummoner", ChampId],
    () => {
      return instance.get(`/champ/${ChampId}/users`);
    },
    {
      select: (data) => data.data,
    }
  );
};
