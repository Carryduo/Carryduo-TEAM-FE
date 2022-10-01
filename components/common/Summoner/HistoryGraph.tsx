import Image from "next/image";
import { Summoner } from "../../../core/api/summoner";
import { usePosition } from "../../../util/hooks/usePosition";

interface Props {
  Summoner: Summoner;
}

const HistoryGraph = ({ Summoner }: Props) => {
  return (
    <div className="flex space-x-2">
      {Summoner.history.positions.map((data) => {
        return (
          <div key={data.id} className="flex flex-col space-y-2">
            <div className="relative h-[100px] w-5 overflow-hidden bg-gray-600">
              <div className="absolute z-10 h-[100px] w-5 animate-graph bg-gray-600"></div>
              <div
                style={{
                  height: `${data.cnt * 10}px`,
                  animation: "test 1s ease-in-out",
                }}
                className={`absolute bottom-0 w-5 bg-blue-500`}
              ></div>
            </div>
            <Image
              width={20}
              height={20}
              alt=""
              src={`/positionIcon/Position_Challenger-${usePosition(
                data.id
              )}.png`}
            />
          </div>
        );
      })}
    </div>
  );
};
export default HistoryGraph;
