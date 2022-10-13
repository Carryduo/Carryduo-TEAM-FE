import { Summoner } from "../../../core/api/summoner/types";
import HistoryDonut from "../../common/Summoner/HistoryDonut";
import HistoryGraph from "../../common/Summoner/HistoryGraph";
import HistoryPlay from "../../common/Summoner/HistoryPlay";

interface Props {
  Summoner: Summoner;
}

const SummonerHistory = ({ Summoner }: Props) => {
  return (
    <div className="w-full h-full p-2 pt-10">
      {Summoner.history === undefined ? (
        <span>최근 전적 없음</span>
      ) : (
        <div className="flex justify-around items-start">
          <div>
            <HistoryDonut Summoner={Summoner} />
          </div>
          <div className="space-y-2">
            <span>플레이한 챔피언 (최근 10게임)</span>
            <HistoryPlay Summoner={Summoner} />
          </div>
          <div className="space-y-8">
            <span>포지션</span>
            <HistoryGraph Summoner={Summoner} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SummonerHistory;
