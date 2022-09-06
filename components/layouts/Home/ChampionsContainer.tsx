import _ from "lodash";
import Image from "next/image";
import { useState } from "react";
import { useChampions } from "../../../pages/api/champions";
import Input from "../../common/Input";

const ChampionsContainer = () => {
  const { data: Champions } = useChampions();
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
      />
      <div className="grid h-[calc(100%-3.5rem)] mt-4 grid-cols-5 gap-2 overflow-hidden overflow-y-scroll">
        {Champions?.filter((val) => {
          if (value === "") {
            return val;
          } else if (val.name.includes(value)) {
            return val;
          }
        }).map((data, i) => {
          return (
            <div key={i} className="h-20 w-14 text-center">
              <Image
                alt=""
                src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data.id}.png`}
                width={56}
                height={56}
                layout="fixed"
                loading="eager"
              />
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
