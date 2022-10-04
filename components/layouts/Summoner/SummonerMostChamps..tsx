import Image from "next/image";
import { Summoner } from "../../../core/api/summoner/types";

interface Props {
  Summoner: Summoner;
}

const SummonerMostChamps = ({ Summoner }: Props) => {
  return (
    <div className="flex flex-col space-y-6">
      <span className="text-lg">mostChamp</span>
      <div className="flex space-x-4">
        {Summoner.mostChamps.map((data) => {
          return (
            <div key={data.id}>
              <Image
                width={75}
                height={128}
                alt=""
                src={String(data.champImg)}
                priority
                layout="fixed"
                className="rounded-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummonerMostChamps;
