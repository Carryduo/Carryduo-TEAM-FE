import Image from "next/image";
import {
  useGetChampDetail,
  useGetMostChampSummoner,
} from "../../../core/api/champion";
import { useTier } from "../../../util/hooks/useTier";

interface Props {
  champId: number;
}

const ChampionDetailContainer = ({ champId }: Props) => {
  const { data: Champion } = useGetChampDetail(champId);
  const { data: MostSummoner } = useGetMostChampSummoner(champId);
  return (
    <>
      <div className="flex h-full items-center space-x-10 p-2">
        <div>
          <Image
            width={200}
            height={200}
            alt=""
            src={
              Champion?.champImg === undefined
                ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                : String(Champion?.champImg)
            }
            priority
            className="rounded-xl"
            layout="fixed"
          />
        </div>
        <div className="flex flex-col space-y-8">
          <span className="text-2xl">{Champion?.champNameKo}</span>
          <div className="flex items-end space-x-2">
            <div>
              <Image
                width={32}
                height={32}
                alt=""
                src={
                  Champion?.skill[4].image === undefined
                    ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                    : String(Champion?.skill[4].image)
                }
                priority
                layout="fixed"
              />
            </div>
            {Champion?.skill.slice(0, 4).map((data) => {
              return (
                <div key={data.id}>
                  <Image
                    width={48}
                    height={48}
                    alt=""
                    src={
                      data.image === undefined
                        ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                        : String(data.image)
                    }
                    priority
                    layout="fixed"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex space-x-2 text-sm">
            <span>승률 67%</span>
            <span>픽률 33%</span>
            <span>벤률 13%</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span>선호 챔피언 유저</span>
          {MostSummoner?.length === 0 ? (
            <span>없음</span>
          ) : (
            MostSummoner?.map((data) => {
              return (
                <span key={data.id}>
                  {data.nickname} / {useTier(data.tier)}
                </span>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ChampionDetailContainer;
