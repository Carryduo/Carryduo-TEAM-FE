import { ChampionMostSummoner } from "../../../core/api/champion";
import { useTier } from "../../../util/hooks/useTier";

interface Props {
  MostSummoner: ChampionMostSummoner[];
}
const MostSummonerData = ({ MostSummoner }: Props) => {
  return (
    <>
      <span>선호 챔피언 유저</span>
      {MostSummoner.length === 0 ? (
        <span>없음</span>
      ) : (
        MostSummoner.map((data) => {
          return (
            <span key={data.id}>
              {data.nickname} / {useTier(data.tier)}
            </span>
          );
        })
      )}
    </>
  );
};

export default MostSummonerData;
