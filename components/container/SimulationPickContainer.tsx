import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Champions } from "../../core/api/champions/types";
import { ChampionSearch } from "../../core/config/ChampionSearch";
import { PickChampArray } from "../../core/config/PickChampArray";
import { PickChampion } from "../../core/config/pickChampion";
import { PickCnt } from "../../core/config/PickCnt";
import PickBox from "../common/Simulation/PickBox";
import PickLayout from "../layouts/Simulation/PickLayout";

const SimulationPickContainer = () => {
  const [champion, setChampion] = useRecoilState(PickChampion);
  const setCount = useSetRecoilState(PickCnt);
  const setSearchValue = useSetRecoilState(ChampionSearch);
  const { champNameEn } = useRecoilValue(PickChampion);
  const [picks, setPicks] = useRecoilState(PickChampArray);
  const [pickCount, setPickCount] = useState<number>(0);

  useEffect(() => {
    if (champNameEn !== "") {
      setPickCount(0);
    }
    setPicks([]);
  }, []);

  const selectChampion = () => {
    if (champion.id === 0) return;
    setPicks((data: Champions[]) => [...data, champion]);
    setPickCount(pickCount + 1);
    setCount(0);
    setChampion({ id: 0, champNameEn: "", champNameKo: "", champImg: "" });
    setSearchValue("");
  };

  return (
    <div className="flex h-full w-full justify-between space-x-2">
      <div className="relative flex h-full w-[30%] flex-col items-center justify-around rounded-lg bg-gray-800">
        <span className="absolute top-2 left-2 text-lg text-blue-500">
          블루 팀
        </span>
        <PickBox pick={picks} pickNum={0} cnt={pickCount} />
        <PickBox pick={picks} pickNum={1} cnt={pickCount} />
      </div>
      <PickLayout pick={picks} SelectChampion={selectChampion} />
      <div className="relative flex h-full w-[30%] flex-col items-center justify-around rounded-lg bg-gray-800">
        <span className="absolute top-2 right-2 text-lg text-red-500">
          레드 팀
        </span>
        <PickBox pick={picks} pickNum={2} cnt={pickCount} />
        <PickBox pick={picks} pickNum={3} cnt={pickCount} />
      </div>
    </div>
  );
};

export default SimulationPickContainer;
