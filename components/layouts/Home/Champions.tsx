import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useGetChamps } from "../../../core/api/champions/queries";
import { PickChampArray } from "../../../core/config/PickChampArray";
import { PickChampion } from "../../../core/config/pickChampion";
import { PickCnt } from "../../../core/config/PickCnt";

interface ChampionsContainerProps {
  value: string;
  toLink: boolean;
}

const ChampionsList = ({ value, toLink }: ChampionsContainerProps) => {
  const { data: Champions } = useGetChamps();
  const setChampion = useSetRecoilState(PickChampion);
  const [cnt, setCnt] = useRecoilState(PickCnt);
  const pickChamp = useRecoilValue(PickChampArray).map((data) => data.id);
  const ChampionList = Champions?.filter((val) => {
    if (value === "") {
      return val;
    } else if (val.champNameKo.includes(value)) {
      return val;
    }
  }).filter((val) => {
    return !pickChamp.includes(val.id);
  });
  return (
    <>
      {ChampionList?.length === 0 ? (
        <div className="absolute">
          <span>결과를 찾을 수 없습니다.</span>
        </div>
      ) : (
        ChampionList?.map((data, i) => {
          return (
            <div key={i} className="h-[85px] w-14 cursor-pointer text-center">
              {toLink ? (
                <Link
                  as={`/champions/${data.id}`}
                  href={{
                    pathname: `/champions/${data.id}`,
                    query: { name: data.champNameKo, category: "champ" },
                  }}
                  passHref
                >
                  <a>
                    <Image
                      alt={`${data.champNameEn}`}
                      src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.champNameEn}.png`}
                      width={56}
                      height={56}
                      priority
                      placeholder="blur"
                      blurDataURL={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.champNameEn}.png`}
                    />
                  </a>
                </Link>
              ) : (
                <Image
                  alt={`${data.champNameEn}`}
                  src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.champNameEn}.png`}
                  width={56}
                  height={56}
                  priority
                  placeholder="blur"
                  blurDataURL={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.champNameEn}.png`}
                  onClick={() => {
                    setChampion({
                      id: data.id,
                      champNameEn: data.champNameEn,
                      champNameKo: data.champNameKo,
                      champImg: data.champImg,
                    });
                    setCnt(cnt + 1);
                  }}
                />
              )}
              <span className="whitespace-nowrap text-xs font-medium">
                {data.champNameKo.length <= 5
                  ? data.champNameKo
                  : `${data.champNameKo.substring(0, 3)}...`}
              </span>
            </div>
          );
        })
      )}
    </>
  );
};

export default ChampionsList;
