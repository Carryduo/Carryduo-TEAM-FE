import Image from "next/image";
import Link from "next/link";
import { Summoner } from "../../../core/api/summoner/types";

interface Props {
  Summoner: Summoner;
}

const SummonerMostChamps = ({ Summoner }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-lg">모스트 챔피언</span>
      <div className="flex space-x-4">
        {Summoner.mostChamps.map((data) => {
          return (
            <div key={data.id}>
              <Link
                as={`/champions/${data.id}`}
                href={{
                  pathname: `/champions/${data.id}`,
                  query: {
                    name: data.champNameKo,
                    category: "champ",
                  },
                }}
              >
                <a>
                  <Image
                    width={75}
                    height={128}
                    alt=""
                    src={String(data.champMainImg)}
                    priority
                    layout="fixed"
                    className="rounded-xl"
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummonerMostChamps;
