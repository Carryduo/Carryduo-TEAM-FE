import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { instance } from "./axios";

interface mostChamp {
  id: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
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
  mostChamps: mostChamp[];
}

interface ISummoner {
  data: Summoner;
}

export const useGetSummoner = (summonerName: string) => {
  return useQuery<ISummoner, AxiosError, Summoner>(
    ["Summoner", summonerName],
    () => {
      return instance.get(`/summoner/${summonerName}`);
    },
    {
      select: (data) => data.data,
    }
  );
};
