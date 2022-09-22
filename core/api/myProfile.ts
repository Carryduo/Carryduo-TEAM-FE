import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../pages/_app";
import { useSweet } from "../../util/hooks/useSweet";
import { instance } from "./axios";

interface ProfileProps {
  data: {
    bio: string;
    enableChat: boolean;
    nickname: string;
    preferPosition: string;
    profileImg: string;
    tier: string;
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
  tier: string;
  enableChat: boolean;
  preferChamp1: number;
  preferChamp2: number;
  preferChamp3: number;
}

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
