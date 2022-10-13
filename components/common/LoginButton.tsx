import Image from "next/image";
import { KAKAO_AUTH_URL } from "../../util/servers/OAuth";

const KakaoLogin = () => {
  const onClick = () => {
    window.location.href = KAKAO_AUTH_URL
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer space-x-4 flex h-10 w-64 items-center justify-center rounded-md bg-[#F8E326]"
    >
      <Image
        alt=""
        src="https://raw.githubusercontent.com/sparta-team6/CO-UP-TEAM-FE/master/src/images/Login/KakaoLogin.png"
        width={28}
        height={28}
        layout="fixed"
        priority= {true}
      />
      <span className="text-black">카카오 로그인</span>
    </div>
  );
};

export default KakaoLogin;
