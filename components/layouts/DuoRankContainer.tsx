import React from "react";
import { useQuery } from "react-query";
import { getDuo } from "../../core/api/duoChamps";

const DuoRankContainer = () => {
  const [pick, setPick] = React.useState<string>("combination");
  const { data } = useQuery(["getDuo", pick], () => getDuo(pick));
  return (
    <React.Fragment>
      <header className=" mb-2 flex h-7 w-full justify-around">
        <span onClick={() => setPick("combination")}>탑 + 정글</span>
        <span onClick={() => setPick("combination1")}>미드 + 정글</span>
        <span onClick={() => setPick("combination2")}>원딜 + 서폿</span>
      </header>
      <div className="grid w-full grid-cols-5">
        <span className="text-center">순위</span>
        <span>챔피언</span>
        <span>티어</span>
        <span>승리횟수</span>
        <span>매칭 수</span>
      </div>
      <div className="h-[calc(100%-4rem)] overflow-y-scroll">
        <div className="w-full">
          {data?.map((data) => {
            return (
              <div
                className=" grid grid-cols-5 grid-rows-[repeat(auto-fill,50px)]"
                key={data.id}
              >
                <span>{data.id}</span>
                <div>
                  <span>{data.champ1}</span>
                  <span>{data.champ2}</span>
                </div>
                <span>{data.tier}</span>
                <span>{data.winRate}</span>
                <span>{data.sampleNum}</span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DuoRankContainer;
