import _ from "lodash";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ChampionSearch } from "../../core/config/ChampionSearch";

import Input from "../common/Input";
import ChampionsList from "../layouts/Home/Champions";

interface ChampionsContainerProps {
  width: string;
  height: string;
  toLink: boolean;
  gridCol: string;
}

const ChampionsContainer = ({
  width,
  height,
  toLink,
  gridCol,
}: ChampionsContainerProps) => {
  const [value, setValue] = useRecoilState(ChampionSearch);
  useEffect(() => {
    setValue("");
  }, []);
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
        autoFocus={true}
      />
      <div
        className={`relative mt-4 grid ${height} ${width} ${gridCol} grid-rows-[repeat(auto-fill,85px)] gap-2 overflow-hidden overflow-y-scroll`}
      >
        <ChampionsList toLink={toLink} value={value} />
      </div>
    </>
  );
};

export default ChampionsContainer;
