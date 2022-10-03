import { useRouter } from "next/router";
import { useEffect } from "react";
import PageContainer from "../components/common/PageContainer";
import LoadingContainer from "../components/layouts/Handler/LoadingContainer";
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
        router.push("/");
      })
      .catch(() => {
        alert("로그인 실패");
        router.back();
      });
  }, []);
  return (
    <PageContainer>
      <LoadingContainer text="로그인 중..." />
    </PageContainer>
  );
};

export default Kakao;
