import Image from "next/image";
import Input from "../../common/Input";
import Bronze from "../../../public/tier/bronze.png";
import Silver from "../../../public/tier/silver.png";
import Gold from "../../../public/tier/gold.png";
import Platinum from "../../../public/tier/platinum.png";
import Diamond from "../../../public/tier/diamond.png";
import Master from "../../../public/tier/master.png";
import Provisional from "../../../public/tier/provisional.png";
import Challenger from "../../../public/tier/challenger.png";
import { UseFormRegisterReturn } from "react-hook-form";

interface TierFormProp {
  register: UseFormRegisterReturn;
  watch: string;
}

const Tier = ({ register, watch }: TierFormProp) => {
  return (
    <div className="col-span-2 space-y-2">
      <span>현재 티어</span>
      <div className="flex w-full space-x-2 overflow-x-scroll">
        <label>
          <Input type="radio" value="0" register={register} />
          <Image
            alt=""
            src={Provisional}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "0" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
        <label>
          <Input type="radio" value="1" register={register} />
          <Image
            alt=""
            src={Bronze}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "1" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
        <label>
          <Input type="radio" value="2" register={register} />
          <Image
            alt=""
            src={Silver}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "2" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
        <label>
          <Input type="radio" value="3" register={register} />
          <Image
            alt=""
            src={Gold}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "3" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
        <label>
          <Input type="radio" value="4" register={register} />
          <Image
            alt=""
            src={Platinum}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "4" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
        <label>
          <Input type="radio" value="5" register={register} />
          <Image
            alt=""
            src={Diamond}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "5" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
        <label>
          <Input type="radio" value="6" register={register} />
          <Image
            alt=""
            src={Master}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "6" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
        <label>
          <Input type="radio" value="7" register={register} />
          <Image
            alt=""
            src={Challenger}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "7" ? "opacity-30" : ""
            }`}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </label>
      </div>
    </div>
  );
};

export default Tier;
