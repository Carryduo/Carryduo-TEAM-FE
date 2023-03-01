export interface MostChamp {
  id: string;
  champNameKo: string;
  champNameEn: string;
  champMainImg: string;
}

export interface Position {
  id: number;
  cnt: number;
}

export interface RecentChamp {
  recentChampId: number;
  recentChampImg: string;
  recentChampWin: number;
  recentChampLose: number;
  recentChampTotal: number;
  recentChampRate: number;
  recentChampName: string;
}

export interface History {
  KDA: number;
  total: number;
  win: number;
  lose: number;
  winRate: number;
  positions: Position[];
  recentChamp: RecentChamp[];
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

export interface ISummoner {
  data: Summoner;
}
