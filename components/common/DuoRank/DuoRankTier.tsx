import Image from "next/image";
import rank1 from "../../../public/rank/icon-tier-1.svg";
import rank2 from "../../../public/rank/icon-tier-2.svg";
import rank3 from "../../../public/rank/icon-tier-3.svg";
import rank4 from "../../../public/rank/icon-tier-4.svg";
import rank5 from "../../../public/rank/icon-tier-5.svg";

interface Props {
  rank: number;
}

const DuoRankTier = ({ rank }: Props) => {
  let DuoRank = rank5;

  switch (rank) {
    case 1:
      DuoRank = rank1;
      break;
    case 2:
      DuoRank = rank2;
      break;
    case 3:
      DuoRank = rank3;
      break;
    case 4:
      DuoRank = rank4;
      break;
    case 5:
      DuoRank = rank5;
      break;
    default:
      break;
  }

  return (
    <Image
      alt={rank.toString()}
      src={DuoRank}
      width={24}
      height={24}
      priority
      layout="fixed"
    />
  );
};

export default DuoRankTier;
