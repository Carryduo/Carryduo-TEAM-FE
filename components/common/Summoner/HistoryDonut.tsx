import { Summoner } from "../../../core/api/summoner";

interface Props {
  Summoner: Summoner;
}

const HistoryDonut = ({ Summoner }: Props) => {
  return (
    <>
      <span>
        {`${Summoner.history.total}전 ${Summoner.history.win}승 ${Summoner.history.lose}패`}
      </span>
      <div>
        <span>그래프</span>
        <span>{`${Summoner.history.win}승 ${Summoner.history.lose}패 ${Summoner.history.winRate}%`}</span>
      </div>
    </>
  );
};

export default HistoryDonut;
