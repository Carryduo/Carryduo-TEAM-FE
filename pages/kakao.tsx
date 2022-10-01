import { useRouter } from "next/router";
import { useEffect } from "react";
import { instance } from "../core/api/axios";
import { useSweet } from "../util/hooks/useSweet";
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
        router.push("/");
      })
      .catch(() => {
        alert("로그인 실패");
        router.back();
      });
  }, []);
  return <span>로그인 중...</span>;
};

export default Kakao;
