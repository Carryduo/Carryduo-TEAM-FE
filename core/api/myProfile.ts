import { useMutation, useQuery } from "react-query";
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
    };
  };
}

export const useGetMyProfile = () => {
  return useQuery<ProfileProps>(["getMyProfile"], () => {
    return instance.get("/user/option");
  });
};

export const usePostMyProfile = () => {
  return useMutation(async (post: any) => {
    await instance
      .post("/user/option", post)
      .then((res) => {
        console.log(res);
        useSweet(1000, "success", "프로필 수정 완료");
      })
      .catch((err) => console.log(err));
  });
};
