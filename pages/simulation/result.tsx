import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useGetSimulationResult } from "../../core/api/simulation/queries";
import { PickChampArray } from "../../core/config/PickChampArray";

const Result = () => {
  const pick = useRecoilValue(PickChampArray);
  const {} = useRouter()
  const { data } = useGetSimulationResult("ad-support", 96, 117, 51, 25);
  return;
};

export default Result;
