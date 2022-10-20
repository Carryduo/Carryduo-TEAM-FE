import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { Champions } from "../../../core/api/champions/types";
import { PickCnt } from "../../../core/config/PickCnt";
import ChampionsContainer from "../../container/ChampionsContainer";

interface Props {
  pick: Champions[];
  SelectChampion: () => void;
}

const PickLayout = ({ pick, SelectChampion }: Props) => {
  const {
    query: { position },
  } = useRouter();
  const pickNum = useRecoilValue(PickCnt);
  return (
    <div className="flex h-full w-[40%] flex-col justify-between">
      <ChampionsContainer
        gridCol="grid-cols-7"
        width="w-full"
        height="h-[calc(100%-10rem)]"
        toLink={false}
      />
      <div className="flex h-24 w-full items-center justify-center">
        {pick[3]?.champNameEn === undefined ? (
          <>
            {pickNum === 0 ? (
              <div className="flex h-10 w-28 items-center justify-center bg-gray-500">
                <span>선택중...</span>
              </div>
            ) : (
              <div
                onClick={SelectChampion}
                className="flex h-10 w-28 cursor-pointer items-center justify-center bg-blue-400"
              >
                <span>선택 완료</span>
              </div>
            )}
          </>
        ) : (
          <Link
            href={{
              pathname: "/simulation/result",
              query: { category: position },
            }}
          >
            <a>
              <div className="flex h-10 w-28 cursor-pointer items-center justify-center bg-blue-400">
                <span>시작하기</span>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PickLayout;
