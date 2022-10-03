import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useGetDuoChampRank } from "../../core/api/duoChampDetail";

interface Props {
  category: string;
}

const ChampionWinRateContainer = ({ category }: Props) => {
  const [pick, setPick] = useState<string>("top");
  const { data: Duo } = useGetDuoChampRank(category, pick);
  return (
    <div className=" h-full w-full p-2">
      <span>듀오 승률 </span>
      <header className=" mb-2 flex h-7 w-full justify-around">
        <span onClick={() => setPick("top")}>탑</span>
        <span onClick={() => setPick("jungle")}>정글</span>
        <span onClick={() => setPick("mid")}>미드</span>
        <span onClick={() => setPick("ad")}>원딜</span>
        <span onClick={() => setPick("support")}>서폿</span>
      </header>
      <div className="flex space-x-7">
        {Duo?.length === undefined ? (
          <span>데이터 없음</span>
        ) : (
          Duo.map((data) => {
            return (
              <div key={data.id}>
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
                    width={150}
                    height={150}
                    layout="fixed"
                    priority
                    className="cursor-pointer"
                  />
                </Link>
                <span>{`${data.winrate}%`}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChampionWinRateContainer;
