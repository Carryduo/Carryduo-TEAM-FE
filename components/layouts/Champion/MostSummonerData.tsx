import { ChampionMostSummoner } from "../../../core/api/champion/types";
import { useTier } from "../../../util/hooks/useTier";

interface Props {
  MostSummoner: ChampionMostSummoner[];
}
const MostSummonerData = ({ MostSummoner }: Props) => {
  return (
    <div className="flex h-[200px] flex-col  space-y-2 overflow-y-scroll">
      <span>선호 챔피언 유저</span>
      {MostSummoner.length === 0 ? (
        <span>없음</span>
      ) : (
        MostSummoner.map((data) => {
          return (
            <>
              <span key={data.id}>
                {data.nickname} / {useTier(data.tier)}
              </span>
            </>
          );
        })
      )}
    </div>
  );
};

export default MostSummonerData;
