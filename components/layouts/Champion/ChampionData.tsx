import Image from "next/image";
import { Champion } from "../../../core/api/champion";
import { BlurData } from "../../../util/servers/BlurData";

interface Props {
  Champion: Champion;
}

const ChampionData = ({ Champion }: Props) => {
  return (
    <>
      <div>
        <Image
          width={200}
          height={200}
          alt=""
          src={String(Champion.champImg)}
          layout="fixed"
          className="rounded-xl"
          placeholder="blur"
          blurDataURL={BlurData}
        />
      </div>
      <div className="flex flex-col space-y-8">
        <span className="text-2xl">{Champion.champNameKo}</span>
        <div className="flex items-end space-x-2">
          <div>
            <Image
              width={40}
              height={40}
              alt=""
              src={String(Champion.skill[4].image)}
              layout="fixed"
              placeholder="blur"
              blurDataURL={BlurData}
              className="rounded-md"
            />
          </div>
          {Champion.skill.slice(0, 4).map((data) => {
            return (
              <div key={data.id}>
                <Image
                  width={48}
                  height={48}
                  alt=""
                  src={String(data.image)}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL={BlurData}
                  className="rounded-md"
                />
              </div>
            );
          })}
        </div>
        <div className="flex space-x-2 text-sm">
          <span>승률 {Champion.winRate}%</span>
          <span>픽률 {Champion.pickRate}%</span>
          <span>벤률 {Champion.banRate}%</span>
        </div>
      </div>
    </>
  );
};

export default ChampionData;
