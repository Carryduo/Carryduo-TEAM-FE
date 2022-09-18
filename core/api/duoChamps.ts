import { MockApi } from "./axios";

interface IDuoChamp {
  champ1: string;
  champ2: string;
  tier: number;
  winRate: number;
  sampleNum: number;
  id: string;
}

export interface IDuoChamps {
  data: IDuoChamp[];
}

export const getDuo = async (name: string) => {
  const { data }: IDuoChamps = await MockApi.get(`/${name}`);
  return data;
};
