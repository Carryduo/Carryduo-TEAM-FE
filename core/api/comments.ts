import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../pages/_app";
import { useSweet } from "../../util/hooks/useSweet";
import { instance } from "./axios";

export interface ICommentProps {
  content: string;
}

interface Comment {
  champId: string;
  commentId: string;
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

interface IComments {
  data: Comment[];
}

export const useGetComments = (category: string, target: number) => {
  return useQuery<IComments>(["Comments", target], () => {
    return instance.get(`/comments/${category}/${target}`);
  });
};

export const usePostComments = (category: string, target: number) => {
  return useMutation(async (post: ICommentProps) => {
    await instance
      .post(`/comments/${category}/${target}`, post)
      .then((res) => {
        useSweet(1000, "success", res.data.message);
        queryClient.invalidateQueries(["Comments", target]);
      })
      .catch((err) => console.log(err));
  });
};

export const useDeleteComments = (commentId: string, target: number) => {
  return useMutation(async () => {
    await instance
      .delete(`/comments/${commentId}`)
      .then((res) => {
        useSweet(1000, "success", res.data.message);
        queryClient.invalidateQueries(["Comments", target]);
      })
      .catch((err) => console.log(err));
  });
};

export const usePatchComments = (commentId: string) => {
  return useMutation(async () => {
    await instance
      .patch(`/comments/${commentId}`)
      .then((res) => {
        useSweet(1000, "success", res.data.message);
      })
      .catch((err) => console.log(err));
  });
};
