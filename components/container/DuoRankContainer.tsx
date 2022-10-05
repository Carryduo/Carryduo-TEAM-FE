import React from "react";
import { Fragment, useState } from "react";
import DuoRankHeader from "../layouts/Home/DuoRankHeader";
import DuoRankList from "../layouts/Home/DuoRankList";

const DuoRankContainer = () => {
  const [pick, setPick] = useState<string>("top-jungle");
  return (
    <Fragment>
      <DuoRankHeader pick={pick} setPick={setPick} />
      <div className="mb-1 grid w-full grid-cols-[100px_340px_1.5fr_1.5fr_1.5fr] text-sm ">
        <span>순위</span>
        <span>듀오 챔피언</span>
        <span className="text-center">티어</span>
        <span className="text-center">승률</span>
        <span className="text-center">매칭 수</span>
      </div>
      <DuoRankList pick={pick} />
    </Fragment>
  );
};

export default React.memo(DuoRankContainer);
