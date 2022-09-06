import axios from "axios";
import { useQuery } from "react-query";

interface ChampionSpells {
  id: string;
  name: string;
  image: {
    full: string;
  };
}

interface Champions {
  id: string;
  name: string;
  spells: ChampionSpells[];
}

interface IChampions {
  data: {
    data: Champions[];
  };
}

export const useChampion = (name: string) => {
  return useQuery(["getChampionData"], async () => {
    const { data }: IChampions = await axios.get(
      `https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion/${name}.json`
    );
    let res = [];
    for (let [, value] of Object.entries(data.data)) {
      res.push(value);
    }
    return res[0];
  });
};
