import Image from "next/image";
import { Summoner } from "../../../core/api/summoner";
import Grid from "../../common/Grid";

interface Props {
  summonerName: string;
  Summoner: Summoner;
}

const SummonerDetailContainer = ({ Summoner, summonerName }: Props) => {
  return (
    <div className="h-full w-full space-y-4">
      <Grid width="w-[900px]" height="h-1/2">
        <div className="flex h-full w-full items-center justify-around">
          <div className="flex flex-col items-center">
            <Image
              width={192}
              height={192}
              alt=""
              src={String(Summoner.summonerIcon)}
              className="rounded-3xl"
              priority
            />
            <span className="z-50 -mt-4 rounded-xl bg-gray-700 py-1 px-3 text-sm">{`${Summoner.summonerLevel}`}</span>
          </div>
          <div className="space-y-10">
            <span className="text-2xl">{summonerName}</span>
            <div className="flex items-center space-x-8">
              <Image
                width={64}
                height={73}
                alt=""
                src={String(Summoner.tierImg)}
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
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <span className="text-lg">mostChamp</span>
            <div className="flex space-x-4">
              {Summoner.mostChamps.map((data) => {
                return (
                  <div key={data.id}>
                    <Image
                      width={75}
                      height={128}
                      alt=""
                      src={String(data.champImg)}
                      priority
                      className="rounded-xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Grid>
      <Grid width="w-[900px]" height="h-1/2">
        {Summoner.history === undefined ? (
          <span>최근 전적 없음</span>
        ) : (
          <>
            <span>최근 전적</span>
            <span>
              {`${Summoner.history.total}전 ${Summoner.history.win}승 ${Summoner.history.lose}패`}
            </span>
            <div>
              <span>그래프</span>
              <span>{`${Summoner.history.win}승 ${Summoner.history.lose}패 ${Summoner.history.winRate}%`}</span>
            </div>
            <div>
              <span>최근 플레이</span>
              <span>
                {Summoner.history.recentChampRate.map((data) => {
                  return (
                    <div key={data.recentChampId}>
                      <Image
                        width={32.5}
                        height={64}
                        alt=""
                        src={data.recentChampImg}
                        priority
                        className="rounded-md"
                      />
                      <span>{`${data.recentChampRate}% `}</span>
                      <span>{`${data.recentChampWin}승 ${data.recentChampLose}패`}</span>
                    </div>
                  );
                })}
              </span>
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
      </Grid>
    </div>
  );
};

export default SummonerDetailContainer;
