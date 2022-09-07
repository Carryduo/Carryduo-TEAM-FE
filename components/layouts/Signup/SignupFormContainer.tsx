import React from "react";
import Image from "next/image";
import Sup from "../../../public/positionIcon/Position_Diamond-Support.png";
import Bot from "../../../public/positionIcon/Position_Diamond-Bot.png";
import Mid from "../../../public/positionIcon/Position_Diamond-Mid.png";
import Jungle from "../../../public/positionIcon/Position_Diamond-Jungle.png";
import Top from "../../../public/positionIcon/Position_Diamond-Top.png";
import NSup from "../../../public/positionIcon/Position_Silver-Support.png";
import NBot from "../../../public/positionIcon/Position_Silver-Bot.png";
import NMid from "../../../public/positionIcon/Position_Silver-Mid.png";
import NJungle from "../../../public/positionIcon/Position_Silver-Jungle.png";
import NTop from "../../../public/positionIcon/Position_Silver-Top.png";
import { useRecoilValue } from "recoil";
import { SubmitHandler, useForm } from "react-hook-form";
import { PickChampion } from "../../../core/config/pickChampion";

import Input from "../../common/Input";
import ChampionsContainer from "../Home/ChampionsContainer";
import ColorButton from "../../common/ColorButton";

interface FormProps {
  nickName: string;
  position: string;
}

interface SignupFormContainerProps {
  setting: boolean;
}

const SignupFormContainer = ({ setting }: SignupFormContainerProps) => {
  const { register, handleSubmit, watch } = useForm<FormProps>();

  const champion = useRecoilValue(PickChampion);
  const [open, setOpen] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
  };
  const onValid: SubmitHandler<FormProps> = (data) => {
    console.log(text, data, champion);
  };
  return (
    <div className="grid h-full w-full grid-cols-3 justify-center">
      <div></div>
      <div className="w-full space-y-4">
        <span className="text-2xl">정보를 추가로 입력해주세요!</span>
        <form onSubmit={handleSubmit(onValid)} className="space-y-4">
          <div>
            <span>닉네임</span>
            <Input
              type="text"
              register={register("nickName")}
              placeHolder="15자 이내"
            />
          </div>
          <div className="flex">
            <span>자기소개</span>
            <textarea
              onChange={handleChange}
              value={text}
              placeholder="50자 이내"
              className="h-20 resize-none bg-gray-500 bg-opacity-30 px-2 text-white outline-none"
            />
          </div>
          <span>선호포지션</span>
          <div className="flex">
            <label>
              <Input type="radio" value="Top" register={register("position")} />
              <Image
                alt=""
                src={watch("position") === "Top" ? Top : NTop}
                width={54}
                height={54}
                className="cursor-pointer rounded-full"
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
                src={watch("position") === "Jungle" ? Jungle : NJungle}
                width={54}
                height={54}
                className="cursor-pointer rounded-full"
                layout="fixed"
                loading="eager"
              />
            </label>
            <label>
              <Input type="radio" value="Mid" register={register("position")} />
              <Image
                alt=""
                src={watch("position") === "Mid" ? Mid : NMid}
                width={54}
                height={54}
                className="cursor-pointer rounded-full"
                layout="fixed"
                loading="eager"
              />
            </label>
            <label>
              <Input type="radio" value="Bot" register={register("position")} />
              <Image
                alt=""
                src={watch("position") === "Bot" ? Bot : NBot}
                width={54}
                height={54}
                className="cursor-pointer rounded-full"
                layout="fixed"
                loading="eager"
              />
            </label>
            <label>
              <Input type="radio" value="Sup" register={register("position")} />
              <Image
                alt=""
                src={watch("position") === "Sup" ? Sup : NSup}
                width={54}
                height={54}
                className="cursor-pointer rounded-full"
                layout="fixed"
                loading="eager"
              />
            </label>
          </div>
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
                width={54}
                height={54}
                layout="fixed"
                loading="eager"
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {setting ? (
            <>
              <div className="space-x-2">
                <span>채팅 활성화</span>
                <span>on</span>
              </div>
              <div>
                <span>테두리 색상</span>
                <div className="space-x-4">
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
          <button type="submit">
            {setting ? <span>저장</span> : <span>회원가입</span>}
          </button>
        </form>
      </div>
      <div>
        {open ? <ChampionsContainer height="h-[450px]" toLink={false} /> : null}
      </div>
    </div>
  );
};

export default SignupFormContainer;
