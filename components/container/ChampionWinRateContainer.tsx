import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useGetDuoChampRank } from "../../core/api/duoChampion/queries";
import Position from "../../core/config/ChampionPosition.json";
import PickLine from "../common/PickLine";
interface Props {
  category: string;
  line: string;
  ChampionName: string;
}

const ChampionWinRateContainer = ({ category, line, ChampionName }: Props) => {
  const { data: Duo } = useGetDuoChampRank(category, line);
  return (
    <div className=" h-full w-full p-2">
      <header className=" mb-2 flex h-7 w-full justify-around">
        <span className="text-gray-300">{`${ChampionName} 포지션 선택`}</span>
        {Position.ChampionWinRatedata.map((data) => {
          return (
            <div
              key={data.id}
              className="flex w-[50px] cursor-pointer flex-col text-center"
            >
              <span>{data.position}</span>
              {line === data.id && <PickLine animate="animate-smLine" />}
            </div>
          );
        })}
      </header>
      <div className="flex h-full w-full items-center justify-between space-x-10 pb-12">
        <div className="w-[100px] ">
          <span>듀오 승률</span>
        </div>
        <div className="flex w-full justify-start space-x-12 ">
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
                    as={`/champions/${data.subChampId.id}`}
                    href={{
                      pathname: `/champions/${data.subChampId.id}`,
                      query: {
                        name: data.subChampId.champNameKo,
                        category: "champ",
                      },
                    }}
                  >
                    <a>
                      <img
                        alt={data.subChampId.champImg}
                        src={data.subChampId.champImg}
                        className="h-[100px] w-[100px]"
                      />
                    </a>
                  </Link>
                  <span>{`${data.winrate}%`}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ChampionWinRateContainer;
