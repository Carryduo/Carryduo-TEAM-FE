import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { instance } from "../core/api/axios";
import { getMyProfile } from "../core/config/toekn";

// 카카오 로그인 인가코드
const Kakao = () => {
  const router = useRouter();
  const setProfile = useSetRecoilState(getMyProfile);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    instance.get(`/admin/kakao/callback?code=${code}`).then((res) => {
      instance
        .get("/user/option", {
          headers: {
            authorization: `Bearer ${res.data.token}`,
          },
        })
        .then((res) => {
          setProfile({
            bio: res.data.bio,
            enableChat: res.data.enableChat,
            nickname: res.data.nickname,
            preferPosition: res.data.preferPosition,
            profileImg: res.data.profileImg,
            tier: res.data.tier,
            userId: res.data.userId,
          });
        });
    });
    router.push("/");
  }, []);

  return <div>안녕</div>;
};

export default Kakao;
