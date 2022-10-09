import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ChampionProps, PickChampion } from "../../core/config/pickChampion";
import { PickCnt } from "../../core/config/PickCnt";
import PickBox from "../common/Simulation/PickBox";
import PickLayout from "../layouts/Simulation/PickLayout";

const SimulationPickContainer = () => {
  const [Champion, setChampion] = useRecoilState(PickChampion);
  const setCount = useSetRecoilState(PickCnt);
  const { name } = useRecoilValue(PickChampion);
  const [pick, setPick] = useState<ChampionProps[]>([]);
  const [cnt, setCnt] = useState<Number>(0);
  useEffect(() => {
    if (name !== "") setCount(0);
  }, []);
  const SelectChampion = () => {
    if (Champion.id === 0) return;
    setPick((data: ChampionProps[]) => {
      return [...data, Champion];
    });
    setCnt(Number(cnt) + 1);
    setCount(0);
    setChampion({ id: 0, name: "" });
  };
  return (
    <div className="flex h-full w-full justify-between space-x-2">
      <div className="flex h-full w-[30%] flex-col items-center justify-around bg-black">
        <PickBox pick={pick} PickNum={0} cnt={Number(cnt)} />
        <PickBox pick={pick} PickNum={1} cnt={Number(cnt)} />
      </div>
      <PickLayout pick={pick} SelectChampion={SelectChampion} />
      <div className="flex h-full w-[30%] flex-col items-center justify-around bg-black">
        <PickBox pick={pick} PickNum={2} cnt={Number(cnt)} />
        <PickBox pick={pick} PickNum={3} cnt={Number(cnt)} />
      </div>
    </div>
  );
};

export default SimulationPickContainer;
