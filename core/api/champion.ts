import axios from "axios";

interface ChampionSpells {
  id: string;
  name: string;
  image: {
    full: string;
  };
}

export interface Champion {
  id: string;
  name: string;
  spells: ChampionSpells[];
}

interface IChampions {
  data: {
    data: Champion[];
  };
}

export const getChamp = async (name: string) => {
  const { data }: IChampions = await axios.get(
    `https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion/${name}.json`
  );
  let res = [];
  for (let [, value] of Object.entries(data.data)) {
    res.push(value);
  }
  return res[0];
};
