import { DuoChampion } from "../duoChampion/types";

export interface IDuoChamps {
  id: string;
  category: number;
  tier: number;
  winrate: string;
  sampleNum: number;
  mainChampId: DuoChampion;
  subChampId: DuoChampion;
}

export interface IDuoChamps {
  data: IDuoChamps[];
}