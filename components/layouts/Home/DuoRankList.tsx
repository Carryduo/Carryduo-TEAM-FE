import Image from "next/image";
import Link from "next/link";
import { useGetDuoRank } from "../../../core/api/duoChampions/queries";
import DuoRankTier from "../../common/DuoRank/DuoRankTier";

interface Props {
  pick: string;
}

const DuoRankList = ({ pick }: Props) => {
  const { data: DuoRank, isLoading } = useGetDuoRank(pick);
  return (
    <div className=" h-[calc(100%-4rem)] overflow-y-scroll">
      <div className="w-full">
        {DuoRank?.map((data, i) => {
          return (
            <div
              className="grid grid-cols-[100px_380px_1.5fr_1.5fr_1.5fr] grid-rows-[repeat(auto-fill,60px)] items-center font-semibold"
              key={data.id}
            >
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span className="pl-2 text-gray-400">{i + 1}</span>
                  <div className="flex items-center space-x-6">
                    <div className="flex w-[190px] h-14 items-center space-x-2 ">
                      <Link
                        href={{
                          pathname: `/champions/${data.mainChampId.id}`,
                          query: {
                            name: data.mainChampId.champNameKo,
                            category: "champ",
                          },
                        }}
                      >
                        <a>
                          <Image
                            alt=""
                            src={data.mainChampId.champImg}
                            width={56}
                            height={56}
                            layout="fixed"
                          />
                        </a>
                      </Link>
                      <span className="text-xs text-gray-300">
                        {data.mainChampId.champNameKo}
                      </span>
                    </div>
                    <span>+</span>
                    <div className="flex w-[190px] h-14 items-center space-x-2">
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
                            width={56}
                            height={56}
                            layout="fixed"
                          />
                        </a>
                      </Link>
                      <span className="text-xs text-gray-300">
                        {data.subChampId.champNameKo}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full justify-center">
                    <DuoRankTier rank={data.tier} />
                  </div>
                  <span className="ml-2 text-center text-gray-300">{`${data.winrate}%`}</span>
                  <span className="text-center text-gray-300">
                    {data.sampleNum}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DuoRankList;
