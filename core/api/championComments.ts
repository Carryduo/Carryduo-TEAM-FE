import { useQuery } from "react-query";
import { instance } from "./axios";

interface ChampionComment {
  id: string;
  category: string;
  content: string;
  reportNum: string;
  userId: {
    enableChat: boolean;
    id: string;
    nickname: string;
    profileImg: string;
  };
}

interface IChampionComments {
  data: ChampionComment[];
}

export const useGetChampComments = (category: string, target: number) => {
  return useQuery<IChampionComments>(["ChampComments"], () => {
    return instance.get(`/comments/${category}/${target}`);
  });
};
