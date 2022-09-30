import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
import { useGetChamps } from "../../../core/api/champions";
import { PickChampion } from "../../../core/config/pickChampion";

interface ChampionsContainerProps {
  value: string;
  toLink: boolean;
}

const ChampionsList = ({ value, toLink }: ChampionsContainerProps) => {
  const { data: Champions } = useGetChamps();
  const setChampion = useSetRecoilState(PickChampion);
  const ChampionList = Champions?.filter((val) => {
    if (value === "") {
      return val;
    } else if (val.champNameKo.includes(value)) {
      return val;
    }
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
                  href={{
                    pathname: `/champions/${data.id}`,
                    query: { name: data.champNameKo, category: "champ" },
                  }}
                  passHref
                >
                  <a>
                    <Image
                      alt=""
                      src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.champNameEn}.png`}
                      width={56}
                      height={56}
                      layout="fixed"
                    />
                  </a>
                </Link>
              ) : (
                <Image
                  alt=""
                  src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.champNameEn}.png`}
                  width={56}
                  height={56}
                  layout="fixed"
                  onClick={() =>
                    setChampion({
                      id: Number(data.id),
                      name: data.champNameEn,
                    })
                  }
                />
              )}
              <span className="whitespace-nowrap text-xs">
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

export default React.memo(ChampionsList);
