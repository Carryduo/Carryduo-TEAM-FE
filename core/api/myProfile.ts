import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../pages/_app";
import { useSweet } from "../../util/hooks/useSweet";
import { instance } from "./axios";

interface userId {
  nickname: string;
  profileImg: string;
  userId: string;
}

interface userOptions {
  data: userId;
}

interface ProfileProps {
  data: {
    bio: string;
    enableChat: boolean;
    nickname: string;
    preferPosition: string;
    profileImg: string;
    tier: number;
    userId: string;
    preferChamp1: {
      champNameEn: string;
      champNameKo: string;
      champImg: string;
      id: string;
    };
  };
}

interface UpdateProfileProps {
  nickname: string;
  profileImg: string;
  bio: string;
  preferPosition: string;
  tier: number;
  enableChat: boolean;
  preferChamp1: number;
  preferChamp2: number;
  preferChamp3: number;
}

export const useGetUserId = () => {
  return useQuery<userOptions, AxiosError, userId>(
    ["getUserId"],
    () => {
      return instance.get("/user");
    },
    {
      select: (data) => data.data,
    }
  );
};

export const useGetMyProfile = () => {
  return useQuery<ProfileProps>(["getMyProfile"], () => {
    return instance.get("/user/option");
  });
};

export const usePostMyProfile = () => {
  return useMutation(async (post: UpdateProfileProps) => {
    await instance
      .post("/user/option", post)
      .then((res) => {
        queryClient.invalidateQueries(["getMyProfile"]);
        useSweet(1000, "success", res.data.message);
      })
      .catch((err) => console.log(err));
  });
};
