import Image from "next/image";
import {
  useGetChampDetail,
  useGetMostChampSummoner,
} from "../../core/api/champion/queries";
import ChampionData from "../layouts/Champion/ChampionData";
import MostSummonerData from "../layouts/Champion/MostSummonerData";

interface Props {
  champId: number;
  line: string;
}

const ChampionDetailContainer = ({ champId, line }: Props) => {
  const { data: Champion } = useGetChampDetail(champId);
  const { data: MostSummoner } = useGetMostChampSummoner(champId);
  return (
    <>
      <div className="flex w-full justify-end">
        <Image
          width={48}
          height={48}
          alt=""
          src={`/positionIcon/Position_Challenger-${
            line === "ad" ? "Bot" : line
          }.png`}
        />
      </div>
      <div className="-mt-12 flex h-full w-full items-center justify-center space-x-16">
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
