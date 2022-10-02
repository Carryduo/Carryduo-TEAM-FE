
import { useQuery } from "react-query";
import { ErrorHandle } from "../config/ErrorType";
import { instance } from "./axios";

interface ChampionSpells {
  id: string;
  desc: string;
  name: string;
  image: string;
  toolTip: string;
}

export interface Champion {
  id: string;
  winRate:string;
  banRate: string;
  pickRate: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
  skill: ChampionSpells[];
}

interface IChampions {
  data: Champion;
}

export interface ChampionMostSummoner {
  id: string;
  nickname: string;
  profileImg: string;
  tier: number;
}
interface IChampionMostSummoner {
  data: ChampionMostSummoner[];
}

export const useGetChampDetail = (ChampId: number) => {
  return useQuery<IChampions, ErrorHandle, Champion>(
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
  return useQuery<IChampionMostSummoner, ErrorHandle, ChampionMostSummoner[]>(
    ["MostSummoner", ChampId],
    () => {
      return instance.get(`/champ/${ChampId}/users`);
    },
    {
      select: (data) => data.data,
    }
  );
};
