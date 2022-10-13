export interface Champions {
  id: number;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
  champ?: string;
}

export interface IChampions {
  data: Champions[];
}

export interface IChampionName {
  data: string[];
}
