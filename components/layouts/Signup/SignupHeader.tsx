import { Switch } from "@mui/material";
import { removeCookie } from "../../../util/servers/cookie";
import ColorButton from "../../common/ColorButton";

const SignupHeader = () => {
  return (
    <header className="col-span-2 flex justify-between">
      <div className="flex items-start space-x-2">
        <span className="text-2xl">환경설정</span>
        <span
          className="cursor-pointer rounded-lg bg-gray-500 px-2 py-1"
          onClick={() => removeCookie("myToken")}
        >
          로그아웃
        </span>
        <button
          className="cursor-pointer rounded-lg bg-gray-500 px-2 py-1"
          type="submit"
        >
          <span>저장</span>
        </button>
      </div>
      <div>
        <div className="flex">
          {/* <div className="flex items-center">
            <span>채팅 활성화</span>
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div> */}
          <div className="flex items-center space-x-2 mt-1">
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
