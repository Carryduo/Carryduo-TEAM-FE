import _ from "lodash";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { PickChampion } from "../../../core/config/pickChampion";
import { Champions, getChamps } from "../../../core/api/champions";
import Input from "../../common/Input";

interface ChampionsContainerProps {
  height: string;
  toLink: boolean;
}

const ChampionsContainer = ({ height, toLink }: ChampionsContainerProps) => {
  const { data: Champions } = useQuery<Champions[], Error>(
    ["champions"],
    getChamps
  );
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
        className={`mt-4 grid ${height} grid-cols-5 grid-rows-[repeat(auto-fill,85px)] gap-2 overflow-hidden overflow-y-scroll`}
      >
        {Champions?.filter((val) => {
          if (value === "") {
            return val;
          } else if (val.name.includes(value)) {
            return val;
          }
        }).map((data, i) => {
          return (
            <div key={i} className="h-[85px] w-14 cursor-pointer text-center">
              {toLink ? (
                <Link href={`/champions/${data.id}`} passHref>
                  <a>
                    <Image
                      alt=""
                      src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.id}.png`}
                      width={56}
                      height={56}
                      layout="fixed"
                      loading="eager"
                      placeholder="blur"
                      blurDataURL={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.id}.png`}
                    />
                  </a>
                </Link>
              ) : (
                <Image
                  alt=""
                  src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.id}.png`}
                  width={56}
                  height={56}
                  layout="fixed"
                  loading="eager"
                  onClick={() => setChampion(data.id)}
                  placeholder="blur"
                  blurDataURL={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.id}.png`}
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
