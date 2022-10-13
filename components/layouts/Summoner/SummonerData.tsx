import Image from "next/image";
import { Summoner } from "../../../core/api/summoner/types";

interface Props {
  summonerName: string;
  Summoner: Summoner;
}

const SummonerData = ({ Summoner, summonerName }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          width={200}
          height={200}
          alt=""
          src={String(Summoner.summonerIcon)}
          className="rounded-3xl"
          layout="fixed"
          priority
        />
        <span className="z-50 -mt-4 rounded-xl bg-gray-700 py-1 px-3 text-sm">{`${Summoner.summonerLevel}`}</span>
      </div>
      <div className="space-y-10">
        <span className="text-2xl">{summonerName}</span>
        <div className="flex items-center space-x-8">
          {Summoner.tierImg === "" ? <span>랭크 전적이 없습니다</span>: <><Image
            width={64}
            height={73}
            alt=""
            src={String(Summoner.tierImg)}
            layout="fixed"
            priority
          />
          <div className="flex space-x-8 text-sm">
            <div className="flex flex-col space-y-4">
              <span>{`${Summoner.tier}`}</span>
              <span>{`${Summoner.lp}LP`}</span>
            </div>
            <div className="flex flex-col items-end space-y-4 ">
              <div>
                <span className=" text-gray-400">{`${Summoner.win}승`}</span>
                <span className=" text-gray-400">{`${Summoner.lose}패`}</span>
              </div>
              <span className=" text-gray-400">{`승률 ${Summoner.winRate}%`}</span>
            </div>
          </div></>}
        </div>
      </div>
    </>
  );
};

export default SummonerData;
