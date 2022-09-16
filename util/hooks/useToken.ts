import { instance } from "../../core/api/axios";
import { getCookie } from "../servers/cookie";
import React from "react";

export const useToken = (api: string) => {
  const [data, setData] = React.useState();
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
