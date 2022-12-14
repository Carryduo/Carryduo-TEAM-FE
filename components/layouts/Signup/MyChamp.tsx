import { useRecoilValue } from "recoil";
import { PickChampion } from "../../../core/config/pickChampion";

interface MyChampProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img?: string;
}

const MyChamp = ({ setOpen, img }: MyChampProps) => {
  const { champNameEn } = useRecoilValue(PickChampion);
  return (
    <div className="space-y-2">
      <span>선호챔피언</span>
      <div className="h-[54px] cursor-pointer">
        {champNameEn === "" ? (
          <img
            alt=""
            src={
              img === undefined
                ? `/cross.png`
                : `https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${img}.png`
            }
            width={45}
            height={45}
            onClick={() => setOpen(true)}
          />
        ) : (
          <img
            alt=""
            src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champNameEn}.png`}
            width={45}
            height={45}
            onClick={() => setOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default MyChamp;
