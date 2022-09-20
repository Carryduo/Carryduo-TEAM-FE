import Image from "next/image";
import { useRecoilValue } from "recoil";
import { PickChampion } from "../../../core/config/pickChampion";

interface MyChampProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyChamp = ({ setOpen }: MyChampProps) => {
  const { name } = useRecoilValue(PickChampion);
  return (
    <div className="space-y-2">
      <span>선호챔피언</span>
      <div className="h-[54px]">
        {name === "" ? (
          <div
            onClick={() => setOpen(true)}
            className="flex h-[54px] w-[54px] items-center justify-center bg-gray-900"
          >
            <span className="text-2xl">?</span>
          </div>
        ) : (
          <Image
            alt=""
            src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${name}.png`}
            width={45}
            height={45}
            layout="fixed"
            loading="eager"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default MyChamp;
