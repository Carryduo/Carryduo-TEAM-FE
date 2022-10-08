import { Dispatch, SetStateAction } from "react";
import Position from "../../../core/config/DuoRankPosition.json";
import PickLine from "../../common/PickLine";

interface Props {
  pick: string;
  setPick: Dispatch<SetStateAction<string>>;
}
const DuoRankHeader = ({ pick, setPick }: Props) => {
  return (
    <header className=" mb-4 flex h-7 w-full justify-around">
      {Position.DuoRankdata.map((data) => {
        return (
          <div
            key={data.id}
            className="flex w-[140px] cursor-pointer flex-col items-center text-center"
          >
            <span className="w-[140px]" onClick={() => setPick(data.id)}>
              {data.position}
            </span>
            {pick === data.id && <PickLine animate="animate-lgLine" />}
          </div>
        );
      })}
    </header>
  );
};

export default DuoRankHeader;
