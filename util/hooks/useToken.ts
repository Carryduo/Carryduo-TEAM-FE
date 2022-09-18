import { instance } from "../../core/api/axios";
import { getCookie } from "../servers/cookie";
import React from "react";
import { useRecoilState } from "recoil";
import { getMyProfile } from "../../core/config/toekn";

export const useToken = (api: string) => {
  const [data, setData] = useRecoilState(getMyProfile);
  React.useEffect(() => {
    const token = getCookie("myToken");
    if (token !== undefined) {
      instance.get(api).then((res: any) => {
        setData(res.data);
      });
    }
  }, []);
  return data;
};
