import { Summoner } from "../../../core/api/summoner";
import HistoryDonut from "../../common/Summoner/HistoryDonut";
import HistoryGraph from "../../common/Summoner/HistoryGraph";

interface Props {
  Summoner: Summoner;
}

const SummonerHistory = ({ Summoner }: Props) => {
  return (
    <>
      {Summoner.history === undefined ? (
        <span>최근 전적 없음</span>
      ) : (
        <>
          <span>최근 전적</span>
          <HistoryDonut Summoner={Summoner} />
          <div>
            <span>최근 플레이</span>
            <HistoryGraph Summoner={Summoner} />
          </div>
          <div>
            <span>포지션</span>
            <span>
              {Summoner.history.positions.map((data) => {
                return (
                  <div key={data.id}>
                    <span> {`${data.id} 라인`}</span>
                    <span> {`${data.cnt} 판수`}</span>
                  </div>
                );
              })}
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default SummonerHistory;
