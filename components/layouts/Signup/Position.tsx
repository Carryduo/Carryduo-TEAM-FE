import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "../../common/Input";

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
            src={`/positionIcon/Position_Challenger-top.png`}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Top" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
          />
        </label>
        <label>
          <Input type="radio" value="Jungle" register={register} />
          <Image
            alt=""
            src={`/positionIcon/Position_Challenger-jungle.png`}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Jungle" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
          />
        </label>
        <label>
          <Input type="radio" value="Mid" register={register} />
          <Image
            alt=""
            src={`/positionIcon/Position_Challenger-mid.png`}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Mid" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
          />
        </label>
        <label>
          <Input type="radio" value="Bot" register={register} />
          <Image
            alt=""
            src={`/positionIcon/Position_Challenger-ad.png`}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Bot" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
          />
        </label>
        <label>
          <Input type="radio" value="Sup" register={register} />
          <Image
            alt=""
            src={`/positionIcon/Position_Challenger-support.png`}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Sup" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
          />
        </label>
      </div>
    </div>
  );
};

export default Position;
