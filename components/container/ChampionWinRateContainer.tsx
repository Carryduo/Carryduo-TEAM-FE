import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useGetDuoChampRank } from "../../core/api/duoChampion/queries";
import Position from "../../core/config/ChampionPosition.json";
import PickLine from "../common/PickLine";
interface Props {
  category: string;
  line: string;
}

const ChampionWinRateContainer = ({ category, line }: Props) => {
  const [pick, setPick] = useState<string>(line);
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
              {pick === data.id && <PickLine animate="animate-smLine" />}
            </div>
          );
        })}
      </header>
      <div className="flex h-full w-full items-center justify-center space-x-12 pb-12">
        {Duo?.length === undefined ? (
          <span>데이터가 없거나 부족합니다</span>
        ) : (
          Duo.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col items-center space-y-4"
              >
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
