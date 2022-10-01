import Image from "next/image";
import { Summoner } from "../../../core/api/summoner";

interface Props {
  Summoner: Summoner;
}

const HistoryGraph = ({ Summoner }: Props) => {
  return (
    <>
      {Summoner.history.recentChampRate.map((data) => {
        return (
          <div key={data.recentChampId}>
            <Image
              width={32.5}
              height={64}
              alt=""
              src={data.recentChampImg}
              layout="fixed"
              priority
              className="rounded-md"
            />
            <span>{`${data.recentChampRate}% `}</span>
            <span>{`${data.recentChampWin}승 ${data.recentChampLose}패`}</span>
          </div>
        );
      })}
    </>
  );
};

export default HistoryGraph;
