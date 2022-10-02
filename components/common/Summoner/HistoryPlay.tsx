import Image from "next/image";
import { Summoner } from "../../../core/api/summoner";

interface Props {
  Summoner: Summoner;
}

const HistoryPlay = ({ Summoner }: Props) => {
  return (
    <>
      {Summoner.history.recentChampRate.map((data) => {
        return (
          <div key={data.recentChampId} className="flex items-center space-x-2">
            <Image
              width={64}
              height={64}
              alt=""
              src={data.recentChampImg}
              layout="fixed"
              priority
              className="rounded-md"
            />
            <span className="text-sm text-gray-400">{`${data.recentChampRate}% `}</span>
            <span className="text-sm text-gray-400">{`( ${data.recentChampWin}승 ${data.recentChampLose}패 )`}</span>
          </div>
        );
      })}
    </>
  );
};

export default HistoryPlay;
