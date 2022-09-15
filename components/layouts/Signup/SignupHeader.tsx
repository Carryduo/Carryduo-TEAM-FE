import { Switch } from "@mui/material";
import ColorButton from "../../common/ColorButton";
import KakaoLogin from "../../common/LoginButton";

interface SignupHeaderProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupHeader = ({ loading, setLoading }: SignupHeaderProps) => {
  return (
    <header className="items- col-span-2 flex justify-between">
      <div className="mt-2 flex items-start space-x-2">
        <span className="text-2xl">환경설정</span>
        <KakaoLogin />
        <button type="submit">
          <span>저장</span>
        </button>
      </div>
      <div>
        <div className="flex">
          <div className="flex items-center">
            <span>채팅 활성화</span>
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span>테두리 색상</span>
            <div className="flex items-center space-x-4">
              <ColorButton
                colorNumber={1}
                backgroundRing="bg-blue-200 ring-blue-200"
              />
              <ColorButton
                colorNumber={2}
                backgroundRing="bg-green-200 ring-green-200"
              />
              <ColorButton
                colorNumber={3}
                backgroundRing="bg-red-200 ring-red-200"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SignupHeader;
