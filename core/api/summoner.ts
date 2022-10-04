import { useQuery } from "react-query";
import { ErrorHandle } from "../config/ErrorType";
import { instance } from "./axios";

interface MostChamp {
  id: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
}

interface Position {
  id: number;
  cnt: number;
}

interface RecentChamp {
  recentChampId: number;
  recentChampImg: string;
  recentChampWin: number;
  recentChampLose: number;
  recentChampTotal: number;
  recentChampRate: number;
  recentChampName:string;
}

interface History {
  KDA: number;
  total: number;
  win: number;
  lose: number;
  winRate: number;
  positions: Position[];
  recentChampRate: RecentChamp[];
}

export interface Summoner {
  id: string;
  summonerName: string;
  summonerIcon: string;
  summonerLevel: string;
  tier: string;
  tierImg: string;
  lp: number;
  win: number;
  lose: number;
  winRate: number;
  mostChamps: MostChamp[];
  history: History;
}

interface ISummoner {
  data: Summoner;
}

export const useGetSummoner = (summonerName: string) => {
  return useQuery<ISummoner, ErrorHandle, Summoner>(
    ["Summoner", summonerName],
    () => {
      return instance.get(`/summoner/${summonerName}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
