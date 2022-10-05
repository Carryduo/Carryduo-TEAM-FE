import { Dispatch, SetStateAction } from "react";
import DuoRankPickLine from "../../common/DuoRank/DuoRankPickLine";

interface Props {
  pick: string;
  setPick: Dispatch<SetStateAction<string>>;
}
const DuoRankHeader = ({ pick, setPick }: Props) => {
  return (
    <header className=" mb-4 flex h-7 w-full justify-around">
      <div className="flex w-[140px] cursor-pointer flex-col items-center text-center">
        <span className="w-[140px]" onClick={() => setPick("top-jungle")}>
          탑 + 정글
        </span>
        {pick === "top-jungle" && <DuoRankPickLine />}
      </div>
      <div className="flex w-[140px] cursor-pointer flex-col items-center text-center">
        <span className="w-[140px]" onClick={() => setPick("mid-jungle")}>
          미드 + 정글
        </span>
        {pick === "mid-jungle" && <DuoRankPickLine />}
      </div>
      <div className="flex w-[140px] cursor-pointer flex-col items-center text-center">
        <span className="w-[140px]" onClick={() => setPick("ad-support")}>
          원딜 + 서폿
        </span>
        {pick === "ad-support" && <DuoRankPickLine />}
      </div>
    </header>
  );
};

export default DuoRankHeader;
