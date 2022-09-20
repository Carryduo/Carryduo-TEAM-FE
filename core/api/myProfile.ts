import { useMutation } from "react-query";
import { useSweet } from "../../util/hooks/useSweet";
import { instance } from "./axios";

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
