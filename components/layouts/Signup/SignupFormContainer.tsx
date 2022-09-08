import React from "react";
import Image from "next/image";
import Sup from "../../../public/positionIcon/Position_Challenger-Support.png";
import Bot from "../../../public/positionIcon/Position_Challenger-Bot.png";
import Mid from "../../../public/positionIcon/Position_Challenger-Mid.png";
import Jungle from "../../../public/positionIcon/Position_Challenger-Jungle.png";
import Top from "../../../public/positionIcon/Position_Challenger-Top.png";
import Bronze from "../../../public/tier/bronze.png";
import Silver from "../../../public/tier/silver.png";
import Gold from "../../../public/tier/gold.png";
import Platinum from "../../../public/tier/platinum.png";
import Diamond from "../../../public/tier/diamond.png";
import Master from "../../../public/tier/master.png";
import Provisional from "../../../public/tier/provisional.png";
import Challenger from "../../../public/tier/challenger.png";
import { useRecoilValue } from "recoil";
import { SubmitHandler, useForm } from "react-hook-form";
import { PickChampion } from "../../../core/config/pickChampion";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Input from "../../common/Input";
import ChampionsContainer from "../Home/ChampionsContainer";
import ColorButton from "../../common/ColorButton";
import { Switch } from "@mui/material";

interface FormProps {
  nickName: string;
  position: string;
  tier: string;
}

interface SignupFormContainerProps {
  setting: boolean;
}

const SignupFormContainer = ({ setting }: SignupFormContainerProps) => {
  const { register, handleSubmit, watch } = useForm<FormProps>();

  const champion = useRecoilValue(PickChampion);
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(true);

  const onValid: SubmitHandler<FormProps> = (data) => {
    console.log(data, champion, loading);
  };
  return (
    <div className="relative grid h-full w-full grid-cols-3 justify-center space-x-4 overflow-y-scroll">
      <div>
        {open ? <ChampionsContainer height="h-[500px]" toLink={false} /> : null}
      </div>
      <div className="w-full space-y-4">
        <form onSubmit={handleSubmit(onValid)} className="-mt-8 space-y-2">
          <button type="submit">
            {setting ? (
              <span className="absolute top-0 right-0">저장</span>
            ) : (
              <span className="absolute top-0 right-0">회원가입</span>
            )}
          </button>
          <div className="flex items-center space-x-2">
            <span>닉네임</span>
            <Input
              rounded="rounded-xl"
              type="text"
              register={register("nickName")}
              placeHolder="15자 이내"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span>자기소개</span>
            <Input
              rounded="rounded-xl"
              width="w-full"
              type="text"
              register={register("nickName")}
              placeHolder="50자 이내"
            />
          </div>
          <div className="space-y-2">
            <span>현재 티어</span>
            <div
              className={`flex space-x-2 overflow-x-scroll ${
                open ? "w-[90%]" : "w-full"
              }`}
            >
              <label>
                <Input
                  type="radio"
                  value="Provisional"
                  register={register("tier")}
                />
                <Image
                  alt=""
                  src={Provisional}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Provisional" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Bronze"
                  register={register("tier")}
                />
                <Image
                  alt=""
                  src={Bronze}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Bronze" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Silver"
                  register={register("tier")}
                />
                <Image
                  alt=""
                  src={Silver}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Silver" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input type="radio" value="Gold" register={register("tier")} />
                <Image
                  alt=""
                  src={Gold}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Gold" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Platinum"
                  register={register("tier")}
                />
                <Image
                  alt=""
                  src={Platinum}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Platinum" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Diamond"
                  register={register("tier")}
                />
                <Image
                  alt=""
                  src={Diamond}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Diamond" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Master"
                  register={register("tier")}
                />
                <Image
                  alt=""
                  src={Master}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Master" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Challenger"
                  register={register("tier")}
                />
                <Image
                  alt=""
                  src={Challenger}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("tier") !== "Challenger" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <span>선호포지션</span>
            <div className="flex space-x-2">
              <label>
                <Input
                  type="radio"
                  value="Top"
                  register={register("position")}
                />
                <Image
                  alt=""
                  src={Top}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("position") !== "Top" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Jungle"
                  register={register("position")}
                />
                <Image
                  alt=""
                  src={Jungle}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("position") !== "Jungle" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Mid"
                  register={register("position")}
                />
                <Image
                  alt=""
                  src={Mid}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("position") !== "Mid" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Bot"
                  register={register("position")}
                />
                <Image
                  alt=""
                  src={Bot}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("position") !== "Bot" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
              <label>
                <Input
                  type="radio"
                  value="Sup"
                  register={register("position")}
                />
                <Image
                  alt=""
                  src={Sup}
                  width={45}
                  height={45}
                  className={`cursor-pointer rounded-full ${
                    watch("position") !== "Sup" ? "opacity-30" : ""
                  }`}
                  layout="fixed"
                  loading="eager"
                />
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <span>선호챔피언</span>
            <div className="h-[54px]">
              {champion === "" ? (
                <div
                  onClick={() => setOpen(true)}
                  className="flex h-[54px] w-[54px] items-center justify-center bg-gray-900"
                >
                  <span className="text-2xl">?</span>
                </div>
              ) : (
                <Image
                  alt=""
                  src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${champion}.png`}
                  width={45}
                  height={45}
                  layout="fixed"
                  loading="eager"
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
          {setting ? (
            <>
              <div className="flex items-center space-x-2">
                <span>채팅 활성화</span>
                <Switch
                  checked={loading}
                  onChange={() => setLoading(!loading)}
                  name="loading"
                  color="primary"
                />
                <span>{loading ? "on" : "off"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>테두리 색상</span>
                <div className="flex items-center space-x-4">
                  <ColorButton
                    colorNumber={1}
                    backgroundRing="bg-blue-200 ring-blue-200"
                  />
                  <ColorButton
                    colorNumber={2}
                    backgroundRing="bg-green-200 ring-green-200"
                  />
                  <ColorButton
                    colorNumber={3}
                    backgroundRing="bg-red-200 ring-red-200"
                  />
                </div>
              </div>
            </>
          ) : null}
        </form>
        {setting ? (
          <>
            <div>
              <span className="text-red-400">로그아웃</span>
            </div>
            <div>
              <span className="text-gray-600">회원탈퇴</span>
            </div>
            <div className="absolute bottom-0 right-0 text-center">
              <span>제작소개 </span>
            </div>
          </>
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default SignupFormContainer;
