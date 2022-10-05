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
  const DuoRank =
    rank === 1
      ? rank1
      : rank == 2
      ? rank2
      : rank === 3
      ? rank3
      : rank === 4
      ? rank4
      : rank === 5
      ? rank5
      : rank5;
  return <Image alt={String(rank)} src={DuoRank} width={24} height={24} priority/>;
};

export default DuoRankTier;
