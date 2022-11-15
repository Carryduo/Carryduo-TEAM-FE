import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { getLocale } from "../../../core/config/locale";
import { removeCookie } from "../../../util/servers/cookie";
import ColorButton from "../../common/ColorButton";

const SignupHeader = () => {
  const [locale, setLocale] = useRecoilState(getLocale);
  const router = useRouter();
  const chooseLocale = () => {
    locale === "ko" ? setLocale("en") : setLocale("ko");
    router.reload();
  };
  return (
    <header className="col-span-2 flex justify-between">
      <div className="flex items-start space-x-4">
        <span className="text-2xl">환경설정</span>
        <span
          className="mt-1 cursor-pointer text-red-400"
          onClick={() => removeCookie("myToken")}
        >
          로그아웃
        </span>
        <button className="mt-1 cursor-pointer " type="submit">
          <span className="text-blue-400">저장</span>
        </button>
      </div>
      <div>
        <div className="flex space-x-8">
          <div className="mt-1 flex items-center space-x-2">
            <span>테두리 색상</span>
            <div className="flex items-center space-x-4">
              <ColorButton
                colorNumber={1}
                backgroundRing="bg-blue-100 ring-blue-100"
              />
              <ColorButton
                colorNumber={2}
                backgroundRing="bg-[#5F99FF] ring-[#5F99FF]"
              />
              <ColorButton
                colorNumber={3}
                backgroundRing="bg-[#00D39E] ring-[#00D39E]"
              />
              <ColorButton
                colorNumber={4}
                backgroundRing="bg-[#FF7637] ring-[#FF7637]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SignupHeader;
