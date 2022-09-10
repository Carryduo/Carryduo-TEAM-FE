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
import Input from "../../common/Input";
import ChampionsContainer from "../Home/ChampionsContainer";
import ColorButton from "../../common/ColorButton";
import { Switch } from "@mui/material";
import Grid from "../../common/Grid";

interface FormProps {
  nickName: string;
  position: string;
  tier: string;
  intro: string;
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
    <>
      <Grid width="w-[40rem]" height="h-[calc(100%+1rem)]">
        {open ? (
          <ChampionsContainer height="h-[calc(100%-3.5rem)]" toLink={false} />
        ) : null}
      </Grid>
      <div className="h-full w-full space-y-4">
        <Grid width="w-full" height="h-[70%]">
          <form
            onSubmit={handleSubmit(onValid)}
            className="grid grid-cols-2 grid-rows-4 gap-2"
          >
            <header className="items- col-span-2 flex justify-between">
              <div className="mt-2">
                <span className="text-2xl">환경설정</span>
                {setting ? <button type="button">로그아웃</button> : null}
                <button type="submit">
                  {setting ? <span>저장</span> : <span>회원가입</span>}
                </button>
              </div>
              <div>
                {setting ? (
                  <div className="flex">
                    <div className="flex items-center">
                      <span>채팅 활성화</span>
                      <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        name="loading"
                        color="primary"
                      />
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
                  </div>
                ) : null}
              </div>
            </header>
            <div className="flex flex-col space-y-2">
              <span>닉네임</span>
              <Input
                rounded="rounded-xl"
                type="text"
                register={register("nickName")}
                placeHolder="15자 이내"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span>자기소개</span>
              <Input
                rounded="rounded-xl"
                width="w-full"
                type="text"
                register={register("intro")}
                placeHolder="50자 이내"
              />
            </div>
            <div className="col-span-2 space-y-2">
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
                  <Input
                    type="radio"
                    value="Gold"
                    register={register("tier")}
                  />
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
          </form>
        </Grid>
        <div className="h-[30%] w-full">
          <header className="h-10 w-full space-x-12 border-b-[1px] pl-4">
            <span>제작소개</span>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </header>
          <footer className="flex h-[calc(100%-2.5rem)] w-full items-end">
            <div className="flex w-full items-end justify-between pl-4">
              <div>
                {setting ? (
                  <span className="font-light text-gray-700 underline">
                    회원탈퇴
                  </span>
                ) : null}
              </div>
              <div className="flex flex-col items-end">
                <span className="text-4xl">LOGO</span>
                <small className="text-white">
                  Copyright, logo.All rights reserved.
                </small>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SignupFormContainer;
