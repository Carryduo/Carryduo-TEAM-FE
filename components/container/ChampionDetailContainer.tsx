import {
  useGetChampDetail,
  useGetMostChampSummoner,
} from "../../core/api/champion/queries";
import PositionPicker from "../common/Champion/PositionPicker";
import ChampionData from "../layouts/Champion/ChampionData";
import MostSummonerData from "../layouts/Champion/MostSummonerData";

interface Props {
  champId: string;
  line: string;
}

const ChampionDetailContainer = ({ champId, line }: Props) => {
  const { data: Champion } = useGetChampDetail(champId, line);
  const { data: MostSummoner } = useGetMostChampSummoner(champId);
  return (
    <>
      <div className="flex w-full justify-end">
        <PositionPicker line={line} />
      </div>
      <div className="-mt-12 flex h-full w-full items-center justify-center space-x-16">
        {Champion && <ChampionData Champion={Champion} />}
        <div className="flex h-[200px] flex-col ">
          {MostSummoner && <MostSummonerData MostSummoner={MostSummoner} />}
        </div>
      </div>
    </>
  );
};

export default ChampionDetailContainer;
