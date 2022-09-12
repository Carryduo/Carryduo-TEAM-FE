import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { PickChampion } from "../../../core/config/pickChampion";
import { useChampions } from "../../../pages/apis/champions";
import Input from "../../common/Input";

interface ChampionsContainerProps {
  height: string;
  toLink: boolean;
}

const ChampionsContainer = ({ height, toLink }: ChampionsContainerProps) => {
  const { data: Champions, isLoading } = useChampions();
  const setChampion = useSetRecoilState(PickChampion);
  const [value, setValue] = useState<string>("");
  const onChange = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, 300);
  return (
    <>
      <Input
        width="w-full"
        rounded="rounded-md"
        onChange={onChange}
        placeHolder="챔피언 검색"
        type="text"
        openSearch={true}
      />
      <div
        className={`mt-4 grid ${height} grid-cols-5 gap-2 overflow-hidden overflow-y-scroll`}
      >
        {Champions?.filter((val) => {
          if (value === "") {
            return val;
          } else if (val.name.includes(value)) {
            return val;
          }
        }).map((data, i) => {
          return (
            <div key={i} className="h-20 w-14 cursor-pointer text-center">
              {/* 이 부분 link 쪽 이상해짐 나중에 데이터 가져올때 확인 필요*/}
              {toLink ? (
                <Image
                  alt=""
                  src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.id}.png`}
                  width={56}
                  height={56}
                  layout="fixed"
                  loading="eager"
                  onClick={() => setChampion(data.id)}
                />
              ) : (
                <Image
                  alt=""
                  src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.id}.png`}
                  width={56}
                  height={56}
                  layout="fixed"
                  loading="eager"
                  onClick={() => setChampion(data.id)}
                />
              )}
              <span className="whitespace-nowrap text-xs">
                {data.name.length <= 5
                  ? data.name
                  : `${data.name.substring(0, 3)}...`}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChampionsContainer;
