import { Summoner } from "../../../core/api/summoner";
import HistoryDonut from "../../common/Summoner/HistoryDonut";
import HistoryGraph from "../../common/Summoner/HistoryGraph";
import HistoryPlay from "../../common/Summoner/HistoryPlay";

interface Props {
  Summoner: Summoner;
}

const SummonerHistory = ({ Summoner }: Props) => {
  return (
    <>
      {Summoner.history === undefined ? (
        <span>최근 전적 없음</span>
      ) : (
        <div className="flex justify-around">
          <div>
            <span>최근 전적</span>
            <HistoryDonut Summoner={Summoner} />
          </div>
          <div className="space-y-4">
            <span>플레이한 챔피언 (최근 10게임)</span>
            <HistoryPlay Summoner={Summoner} />
          </div>
          <div>
            <span>포지션</span>
            <HistoryGraph Summoner={Summoner} />
          </div>
        </div>
      )}
    </>
  );
};

export default SummonerHistory;
