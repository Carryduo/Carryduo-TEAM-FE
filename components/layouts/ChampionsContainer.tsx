import _ from "lodash";
import { useState } from "react";

import Input from "../common/Input";
import ChampionsList from "./Home/Champions";

interface ChampionsContainerProps {
  height: string;
  toLink: boolean;
}

const ChampionsContainer = ({ height, toLink }: ChampionsContainerProps) => {
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
        <ChampionsList toLink={toLink} value={value} />
      </div>
    </>
  );
};

export default ChampionsContainer;
