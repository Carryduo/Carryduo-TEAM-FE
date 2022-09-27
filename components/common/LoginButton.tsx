import Image from "next/image";
import { KAKAO_AUTH_URL } from "../../util/servers/OAuth";

const KakaoLogin = () => {
  const onClick = () => {
    window.location.href = KAKAO_AUTH_URL
  };

  return (
    <div
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8E326]"
    >
      <Image
        alt=""
        src="https://raw.githubusercontent.com/sparta-team6/CO-UP-TEAM-FE/master/src/images/Login/KakaoLogin.png"
        width={28}
        height={28}
        priority= {true}
      />
    </div>
  );
};

export default KakaoLogin;
