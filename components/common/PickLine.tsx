import { getShadowColor } from "../../core/config/shadowColor";
import { useShadow } from "../../util/hooks/useShadow";

interface Props {
  animate: "animate-smLine" | "animate-lgLine";
}

const PickLine = ({ animate }: Props) => {
  const [color] = useShadow(getShadowColor);
  const bgColor =
    color === 1
      ? "bg-blue-100"
      : color === 2
      ? "bg-[#5F99FF]"
      : color === 3
      ? "bg-[#00D39E]"
      : color === 4
      ? "bg-[#FF7637]"
      : "bg-gray-700";

  return <div className={`h-[2px] ${bgColor} ${animate}`}></div>;
};

export default PickLine;
