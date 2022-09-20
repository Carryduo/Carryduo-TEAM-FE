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
  console.log(watch)
  return (
    <div className="col-span-2 space-y-2">
      <span>현재 티어</span>
      <div className="flex w-full space-x-2 overflow-x-scroll">
        <label>
          <Input type="radio" value="Provisional" register={register} />
          <Image
            alt=""
            src={Provisional}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Provisional" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Bronze" register={register} />
          <Image
            alt=""
            src={Bronze}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Bronze" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Silver" register={register} />
          <Image
            alt=""
            src={Silver}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "실버" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Gold" register={register} />
          <Image
            alt=""
            src={Gold}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Gold" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Platinum" register={register} />
          <Image
            alt=""
            src={Platinum}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Platinum" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Diamond" register={register} />
          <Image
            alt=""
            src={Diamond}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Diamond" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Master" register={register} />
          <Image
            alt=""
            src={Master}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Master" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
        <label>
          <Input type="radio" value="Challenger" register={register} />
          <Image
            alt=""
            src={Challenger}
            width={45}
            height={45}
            className={`cursor-pointer rounded-full ${
              watch !== "Challenger" ? "opacity-30" : ""
            }`}
            layout="fixed"
            loading="eager"
          />
        </label>
      </div>
    </div>
  );
};

export default Tier;
