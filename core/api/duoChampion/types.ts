export interface DuoChampion {
  id: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
}

export interface IDuoChamp {
  id: string;
  category: string;
  winrate: number;
  sampleNum: number;
  subChampId: DuoChampion;
}

export interface IDuoChamps {
  data: IDuoChamp[];
}
