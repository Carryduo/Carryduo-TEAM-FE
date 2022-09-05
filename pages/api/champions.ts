import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

interface IChampions {
  data: {
    data: any;
  };
}

export const useChampions = () => {
  return useQuery(["getChampionsData"], async () => {
    const { data }: IChampions = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion.json"
    );
    return Object.entries(data.data);
  });
};
