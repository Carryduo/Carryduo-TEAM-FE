import axios from "axios";

export interface Champions {
  id: string;
  name: string;
}

export interface IChampions {
  data: {
    data: Champions[];
  };
}

export const getChamps = async () => {
  const { data }: IChampions = await axios.get(
    "https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion.json"
  );
  let res = [];
  for (let [, value] of Object.entries(data.data)) {
    res.push(value);
  }
  return res;
};
