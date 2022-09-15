import axios from "axios";
import { useQuery } from "react-query";

interface Champions {
  id: string;
  name: string;
}

interface IChampions {
  data: {
    data: Champions[];
  };
}

export const useChampions = () => {
  return useQuery(["getChampionsData"], async () => {
    const { data }: IChampions = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion.json"
    );
    let res = [];
    for (let [, value] of Object.entries(data.data)) {
      res.push(value);
    }
    return res;
  });
};

export const getChamps = async (name : string) => {
  const { data }: IChampions = await axios.get(
    `https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion/${name}.json`
  );
  let res = [];
  for (let [, value] of Object.entries(data.data)) {
    res.push(value);
  }
  return res[0];
};
