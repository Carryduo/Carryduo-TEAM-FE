import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../../pages/_app";
import { useSweet } from "../../../util/hooks/useSweet";
import { getCookie } from "../../../util/servers/cookie";
import { ErrorHandle } from "../../config/ErrorType";
import { instance } from "../axios";
import {
  Profile,
  ProfileProps,
  UpdateProfileProps,
  userId,
  userOptions,
} from "./types";

const Token = getCookie("myToken") === undefined ? false : true;

export const useGetUserId = () => {
  return useQuery<userOptions, ErrorHandle, userId>(
    ["getUserId"],
    () => {
      return instance.get("/user");
    },
    {
      select: (data) => data.data,
      enabled: Token,
    }
  );
};

export const useGetMyProfile = () => {
  return useQuery<ProfileProps, ErrorHandle, Profile>(
    ["getMyProfile"],
    () => {
      return instance.get("/user/option");
    },
    {
      select: (data) => data.data,
      enabled: Token,
    }
  );
};

export const usePostMyProfile = () => {
  return useMutation(async (post: UpdateProfileProps) => {
    await instance
      .post("/user/option", post)
      .then((res) => {
        queryClient.invalidateQueries(["getMyProfile"]);
        useSweet(1000, "success", res.data.message);
      })
      .catch((err) => useSweet(1000, "error", err.response.data.message));
  });
};
