import Image from "next/image";
import Link from "next/link";
import { Summoner } from "../../../core/api/summoner/types";

interface Props {
  Summoner: Summoner;
}

const HistoryPlay = ({ Summoner }: Props) => {
  return (
    <>
      {Summoner.history.recentChamp.map((data) => {
        return (
          <div key={data.recentChampId} className="flex items-center space-x-2">
            <Link
              href={{
                pathname: `/champions/${data.recentChampId}`,
                query: {
                  name: data.recentChampName,
                  category: "champ",
                },
              }}
            >
              <a>
                <Image
                  width={48}
                  height={48}
                  alt=""
                  src={data.recentChampImg}
                  layout="fixed"
                  priority
                  className="rounded-full"
                />
              </a>
            </Link>
            <span className="text-sm text-gray-400">{`${data.recentChampRate}% `}</span>
            <span className="text-sm text-gray-400">{`( ${data.recentChampWin}승 ${data.recentChampLose}패 )`}</span>
          </div>
        );
      })}
    </>
  );
};

export default HistoryPlay;
