import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../pages/_app";
import { useSweet } from "../../util/hooks/useSweet";
import { instance } from "./axios";

export interface ICommentProps {
  content: string;
}

interface Comment {
  champId: string;
  id: string;
  category: string;
  content: string;
  reportNum: string;
  createdAt: string;
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

export const useGetComments = (category: string, target: number | string) => {
  return useQuery<IComments, AxiosError, Comment[]>(
    ["Comments", target],
    () => {
      return instance.get(`/comments/${category}/${target}`);
    },
    {
      select: (data) => data.data,
    }
  );
};

export const usePostComments = (category: string, target: number | string) => {
  return useMutation(async (post: ICommentProps) => {
    await instance
      .post(`/comments/${category}/${target}`, post)
      .then((res) => {
        useSweet(1000, "success", res.data.message);
        queryClient.invalidateQueries(["Comments", target]);
      })
      .catch((err) => console.log(err.response));
  });
};

export const useDeleteComments = (
  commentId: string,
  target: number | string
) => {
  return useMutation(async () => {
    await instance
      .delete(`/comments/${commentId}`)
      .then((res) => {
        useSweet(1000, "success", res.data.message);
        queryClient.invalidateQueries(["Comments", target]);
      })
      .catch((err) => console.log(err.data));
  });
};

export const useUpdateComments = (
  commentId: string,
  target: number | string
) => {
  return useMutation(async (post: ICommentProps) => {
    await instance
      .patch(`/comments/${commentId}`, post)
      .then((res) => {
        useSweet(1000, "success", res.data.message);
        queryClient.invalidateQueries(["Comments", target]);
      })
      .catch((err) => console.log(err.response));
  });
};

export const usePatchComments = (commentId: string) => {
  return useMutation(async () => {
    await instance
      .patch(`/comments/report/${commentId}`)
      .then((res) => {
        useSweet(1000, "error", res.data.message);
      })
      .catch((err) => console.log(err.response));
  });
};
