import { getShadowColor } from "../../../core/config/shadowColor";
import { useShadow } from "../../../util/hooks/useShadow";

interface Props {
  animate: string;
}

const DuoRankPickLine = ({ animate }: Props) => {
  const [color] = useShadow(getShadowColor);
  return (
    <div
      className={`h-[2px]  ${
        color === 1
          ? "bg-blue-100"
          : color === 2
          ? "bg-[#5F99FF]"
          : color === 3
          ? "bg-[#00D39E]"
          : color === 4
          ? "bg-[#FF7637]"
          : "bg-gray-700"
      } ${animate}`}
    ></div>
  );
};

export default DuoRankPickLine;
