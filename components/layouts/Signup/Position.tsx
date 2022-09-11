import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "../../common/Input";
import Sup from "../../../public/positionIcon/Position_Challenger-Support.png";
import Bot from "../../../public/positionIcon/Position_Challenger-Bot.png";
import Mid from "../../../public/positionIcon/Position_Challenger-Mid.png";
import Jungle from "../../../public/positionIcon/Position_Challenger-Jungle.png";
import Top from "../../../public/positionIcon/Position_Challenger-Top.png";

interface PositionFormProp {
  register: UseFormRegisterReturn;
  watch: string;
}

const Position = ({ register, watch }: PositionFormProp) => {
  return (
    <div className="space-y-2">
      <span>선호포지션</span>
      <div className="flex space-x-2">
        <label>
          <Input type="radio" value="Top" register={register} />
          <Image
            alt=""
            src={Top}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Top" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Jungle" register={register} />
          <Image
            alt=""
            src={Jungle}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Jungle" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Mid" register={register} />
          <Image
            alt=""
            src={Mid}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Mid" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Bot" register={register} />
          <Image
            alt=""
            src={Bot}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Bot" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Sup" register={register} />
          <Image
            alt=""
            src={Sup}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Sup" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
      </div>
    </div>
  );
};

export default Position;
