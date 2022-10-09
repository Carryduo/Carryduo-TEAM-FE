import Image from "next/image";
import { useRecoilValue } from "recoil";
import { PickChampion } from "../../../core/config/pickChampion";
import Cross from "../../../public/cross.png";

interface MyChampProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img?: string;
}

const MyChamp = ({ setOpen, img }: MyChampProps) => {
  const { name } = useRecoilValue(PickChampion);
  return (
    <div className="space-y-2">
      <span>선호챔피언</span>
      <div className="h-[54px] cursor-pointer">
        {name === "" ? (
          <Image
            alt=""
            src={
              img === undefined
                ? Cross
                : `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${img}.png`
            }
            width={45}
            height={45}
            layout="fixed"
            loading="eager"
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            alt=""
            src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${name}.png`}
            width={45}
            height={45}
            layout="fixed"
            priority
            placeholder="blur"
            blurDataURL={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${name}.png`}
            onClick={() => setOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default MyChamp;
