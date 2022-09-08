import { useSetRecoilState } from "recoil";
import { getShadowColor } from "../../core/config/shadowColor";

interface ColorButtonProps {
  colorNumber: number;
  backgroundRing: string;
}

const ColorButton = ({ colorNumber, backgroundRing }: ColorButtonProps) => {
  const setColor = useSetRecoilState(getShadowColor);
  return (
    <button
      type="button"
      onClick={() => setColor(colorNumber)}
      className={`h-5 w-5 rounded-full ${backgroundRing} ring-offset-2 transition focus:ring-2`}
    />
  );
};

export default ColorButton;
