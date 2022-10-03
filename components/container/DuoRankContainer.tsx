import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fragment, useState } from "react";
import { useGetDuoRank } from "../../core/api/duoChamps";

const DuoRankContainer = () => {
  const [pick, setPick] = useState<string>("top-jungle");
  const { data } = useGetDuoRank(pick);
  return (
    <Fragment>
      <header className=" mb-2 flex h-7 w-full justify-around">
        <span onClick={() => setPick("top-jungle")}>탑 + 정글</span>
        <span onClick={() => setPick("mid-jungle")}>미드 + 정글</span>
        <span onClick={() => setPick("ad-support")}>원딜 + 서폿</span>
      </header>
      <div className="grid w-full grid-cols-5">
        <span>순위</span>
        <span>챔피언</span>
        <span>티어</span>
        <span>승률</span>
        <span>매칭 수</span>
      </div>
      <div className="h-[calc(100%-4rem)] overflow-y-scroll">
        <div className="w-full">
          {data?.map((data, i) => {
            return (
              <div
                className=" grid grid-cols-5 grid-rows-[repeat(auto-fill,50px)]"
                key={data.id}
              >
                <span>{i + 1}</span>
                <div className="flex space-x-2">
                  <Link
                    href={{
                      pathname: `/champions/${data.mainChampId.id}`,
                      query: {
                        name: data.mainChampId.champNameKo,
                        category: "champ",
                      },
                    }}
                  >
                    <Image
                      alt=""
                      src={data.mainChampId.champImg}
                      width={56}
                      height={56}
                      layout="fixed"
                      className="cursor-pointer"
                    />
                  </Link>
                  <Link
                    href={{
                      pathname: `/champions/${data.subChampId.id}`,
                      query: {
                        name: data.subChampId.champNameKo,
                        category: "champ",
                      },
                    }}
                  >
                    <Image
                      alt=""
                      src={data.subChampId.champImg}
                      width={56}
                      height={56}
                      layout="fixed"
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
                <span>{data.tier}</span>
                <span>{`${data.winrate}%`}</span>
                <span>{data.sampleNum}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(DuoRankContainer);
