import { useRouter } from "next/router";
import { useEffect } from "react";
import { instance } from "../core/api/axios";
import { useTime } from "../util/hooks/useTime";
import { setCookie } from "../util/servers/cookie";

const Kakao = () => {
  const router = useRouter();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    instance
      .get(`/admin/kakao/callback?code=${code}`)
      .then((res) => {
        setCookie("myToken", res.data.token, {
          expires: useTime(60 * 24 * 14),
        });
      })
      .finally(() => {
        router.push("/");
      });
  }, []);
  return <div>안녕</div>;
};

export default Kakao;
