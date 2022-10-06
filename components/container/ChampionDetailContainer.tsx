import {
  useGetChampDetail,
  useGetMostChampSummoner,
} from "../../core/api/champion/queries";
import ChampionData from "../layouts/Champion/ChampionData";
import MostSummonerData from "../layouts/Champion/MostSummonerData";

interface Props {
  champId: number;
}

const ChampionDetailContainer = ({ champId }: Props) => {
  const { data: Champion } = useGetChampDetail(champId);
  const { data: MostSummoner } = useGetMostChampSummoner(champId);
  return (
    <>
      <div className="flex h-full items-center space-x-12 p-2">
        {Champion === undefined ? null : <ChampionData Champion={Champion} />}
        <div className="flex h-[200px] flex-col ">
          {MostSummoner === undefined ? null : (
            <MostSummonerData MostSummoner={MostSummoner} />
          )}
        </div>
      </div>
    </>
  );
};

export default ChampionDetailContainer;
