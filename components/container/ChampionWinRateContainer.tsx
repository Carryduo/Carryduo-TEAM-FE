import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useGetDuoChampRank } from "../../core/api/duoChampion/queries";
import DuoRankPickLine from "../common/DuoRank/DuoRankPickLine";
import Position from "../../core/config/ChampionPosition.json";

interface Props {
  category: string;
}

const ChampionWinRateContainer = ({ category }: Props) => {
  const [pick, setPick] = useState<string>("top");
  const { data: Duo } = useGetDuoChampRank(category, pick);
  return (
    <div className=" h-full w-full p-2">
      <header className=" mb-2 flex h-7 w-full justify-around">
        <span className="text-gray-300">라인별 듀오 챔피언</span>
        {Position.ChampionWinRatedata.map((data) => {
          return (
            <div
              key={data.id}
              className="flex w-[50px] cursor-pointer flex-col text-center"
            >
              <span onClick={() => setPick(data.id)}>{data.position}</span>
              {pick === data.id && <DuoRankPickLine animate="animate-smLine" />}
            </div>
          );
        })}
      </header>
      <div className="flex space-x-12 justify-center items-center h-full w-full pb-12">
        {Duo?.length === undefined ? (
          <span>데이터 없음</span>
        ) : (
          Duo.map((data) => {
            return (
              <div key={data.id} className="flex flex-col items-center space-y-4">
                <Link
                  href={{
                    pathname: `/champions/${data.subChampId.id}`,
                    query: {
                      name: data.subChampId.champNameKo,
                      category: "champ",
                    },
                  }}
                >
                  <a>
                    <Image
                      alt=""
                      src={data.subChampId.champImg}
                      width={100}
                      height={100}
                      layout="fixed"
                      loading="eager"
                    />
                  </a>
                </Link>
                <span>{`승률 - ${data.winrate}%`}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChampionWinRateContainer;
