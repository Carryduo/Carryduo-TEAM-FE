export interface ChampionSpells {
  id: string;
  desc: string;
  name: string;
  image: string;
  toolTip: string;
}

export interface ChampionPosition {
  top: string;
  jungle: string;
  mid: string;
  ad: string;
  support: string;
}

export interface Champion {
  id: string;
  winRate: string;
  banRate: string;
  pickRate: string;
  champNameKo: string;
  champNameEn: string;
  champImg: string;
  rate: ChampionPosition[];
  skill: ChampionSpells[];
}

export interface IChampions {
  data: Champion;
}

export interface ChampionMostSummoner {
  id: string;
  nickname: string;
  profileImg: string;
  tier: number;
}

export interface IChampionMostSummoner {
  data: ChampionMostSummoner[];
}
