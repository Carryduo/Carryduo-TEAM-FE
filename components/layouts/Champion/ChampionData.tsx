import { upperCase } from "lodash";
import Image from "next/image";
import { Champion } from "../../../core/api/champion/types";
import SkillDescription from "../../common/Champion/SkillDescription";

interface Props {
  Champion: Champion;
}

const ChampionData = ({ Champion }: Props) => {
  return (
    <>
      <div className="h-[280px] w-[154px] overflow-hidden rounded-xl">
        {/* <Image
          width={200}
          height={200}
          alt=""
          src={String(Champion.champImg)}
          className="scale-110"
          layout="fixed"
          priority
        /> */}
        <img
          alt={String(Champion.champImg)}
          src={String(Champion.champImg)}
          className="scale-110"
        />
      </div>
      <div className="flex h-[200px] flex-col justify-between">
        <div className="flex h-12 w-full justify-between">
          <span className="text-2xl">{Champion.champNameKo}</span>
          <div className="flex space-x-1">
            {/* <Image
              width={42}
              height={42}
              alt=""
              src={String(Champion.spellInfo[0].spell1Img)}
              layout="fixed"
              priority
              className="rounded-md"
              unoptimized={true}
            /> */}
            <img
              src={String(Champion.spellInfo[0].spell1Img)}
              alt={String(Champion.spellInfo[0].spell1Img)}
              className="h-[42px] w-[42px] rounded-md"
            />
            {/* <Image
              width={42}
              height={42}
              alt=""
              src={String(Champion.spellInfo[0].spell2Img)}
              layout="fixed"
              priority
              className="rounded-md"
              unoptimized={true}
            /> */}
            <img
              src={String(Champion.spellInfo[0].spell2Img)}
              alt={String(Champion.spellInfo[0].spell2Img)}
              className="h-[42px] w-[42px] rounded-md"
            />
          </div>
        </div>
        <div className="flex items-end space-x-2">
          <div className="tooltip">
            {/* <Image
              width={40}
              height={40}
              alt=""
              src={String(Champion.skill[4].image)}
              layout="fixed"
              priority
              placeholder="blur"
              blurDataURL={String(Champion.skill[4].image)}
              className="rounded-md"
            /> */}
            <img
              src={String(Champion.skill[4].image)}
              alt={String(Champion.skill[4].image)}
              className="h-10 w-10 rounded-md"
            />
            <div className="tooltiptext tooltip-bottom">
              <SkillDescription
                name={Champion.skill[4].name}
                desc={Champion.skill[4].desc}
              />
            </div>
          </div>
          {Champion.skill.slice(0, 4).map((data) => {
            return (
              <div className="tooltip" key={data.id}>
                {/* <Image
                  width={48}
                  height={48}
                  alt=""
                  src={String(data.image)}
                  layout="fixed"
                  priority
                  placeholder="blur"
                  blurDataURL={String(data.image)}
                  className="rounded-md"
                /> */}
                <img
                  src={String(data.image)}
                  alt={String(data.image)}
                  className="h-12 w-12 rounded-md"
                />
                <div className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-sm bg-black">
                  <span>{upperCase(data.id)}</span>
                </div>
                <div className="tooltiptext tooltip-bottom">
                  <SkillDescription
                    name={data.name}
                    desc={data.desc}
                    toolTip={data.toolTip}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex space-x-8 text-sm">
          <span className="text-gray-400">
            ?????? <p className="text-white">{Champion.winRate}%</p>
          </span>
          <span className="text-gray-400">
            ?????? <p className="text-white">{Champion.pickRate}%</p>
          </span>
          <span className="text-gray-400">
            ?????? <p className="text-white">{Champion.banRate}%</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default ChampionData;
