import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getChamps } from "../../../core/api/champions/queries";
import { Champions } from "../../../core/api/champions/types";
import { getLocale } from "../../../core/config/locale";
import { PickChampArray } from "../../../core/config/PickChampArray";
import { PickChampion } from "../../../core/config/pickChampion";
import { PickCnt } from "../../../core/config/PickCnt";
import { getShadowColor } from "../../../core/config/shadowColor";
import { useShadow } from "../../../util/hooks/useShadow";

interface ChampionsContainerProps {
  value: string;
  toLink: boolean;
}

const ChampionsList = ({ value, toLink }: ChampionsContainerProps) => {
  const locale = useRecoilValue(getLocale);
  const { data: Champions } = useQuery<Champions[]>(["Champs"], getChamps);
  // const { data: ChampName } = useGetChampionName(locale);
  const setChampion = useSetRecoilState(PickChampion);
  const [cnt, setCnt] = useRecoilState(PickCnt);
  const pickChamp = useRecoilValue(PickChampArray).map((data) => data.id);
  const [color] = useShadow(getShadowColor);
  // const ChampionNameList = ChampName?.filter((val) => {
  //   if (value === "") {
  //     return val;
  //   } else if (val.includes(value)) {
  //     return val;
  //   }
  // });
  const ChampionList = Champions?.filter((val) => {
    if (locale === "ko") {
      if (value === "") {
        return val;
      } else if (val.champNameKo.includes(value)) {
        return val;
      }
    } else {
      if (value === "") {
        return val;
      } else if (val.champNameEn.includes(value)) {
        return val;
      }
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
                <div>
                  <Link
                    href={{
                      pathname: `/champions/${data.id}`,
                      query: { name: data.champNameKo, category: "champ" },
                    }}
                    passHref
                  >
                    <a>
                      <Image
                        alt={`${data.champNameEn}`}
                        src={`${data.champImg}`}
                        width={56}
                        height={56}
                        placeholder="blur"
                        blurDataURL={`${data.champImg}`}
                        className={`hover:border-[1px] hover:border-solid ${
                          color === 1
                            ? "hover:border-blue-100"
                            : color === 2
                            ? "hover:border-[#5F99FF]"
                            : color === 3
                            ? "hover:border-[#00D39E]"
                            : color === 4
                            ? "hover:border-[#FF7637]"
                            : "hover:border-gray-700"
                        }`}
                      />
                    </a>
                  </Link>
                </div>
              ) : (
                <Image
                  alt={`${data.champNameEn}`}
                  src={`${data.champImg}`}
                  width={56}
                  height={56}
                  placeholder="blur"
                  blurDataURL={`${data.champImg}`}
                  onClick={() => {
                    setChampion({
                      id: data.id,
                      champNameEn: data.champNameEn,
                      champNameKo: data.champNameKo,
                      champImg: data.champImg,
                    });
                    setCnt(cnt + 1);
                  }}
                  className={`hover:border-[1px] hover:border-solid ${
                    color === 1
                      ? "hover:border-blue-100 active:border-[2px]"
                      : color === 2
                      ? "hover:border-[#5F99FF] active:border-[2px]"
                      : color === 3
                      ? "hover:border-[#00D39E] active:border-[2px]"
                      : color === 4
                      ? "hover:border-[#FF7637] active:border-[2px]"
                      : "hover:border-gray-700"
                  }`}
                />
              )}
              <span className="whitespace-nowrap text-xs font-medium">
                {/* {ChampionNameList === undefined
                  ? null
                  : useName(ChampionNameList[i], locale)} */}
                {data.champNameKo.length <= 5
                  ? data.champNameKo
                  : `${data.champNameKo.substring(0, 4)}...`}
              </span>
            </div>
          );
        })
      )}
    </>
  );
};

export default ChampionsList;
