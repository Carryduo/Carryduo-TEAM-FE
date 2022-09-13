import React from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { SubmitHandler, useForm } from "react-hook-form";
import { PickChampion } from "../../core/config/pickChampion";
import ChampionsContainer from "./Home/ChampionsContainer";
import Grid from "../common/Grid";
import NickName from "./Signup/NickName";
import Introduce from "./Signup/Introduce";
import Tier from "./Signup/Tier";

import SignupHeader from "./Signup/SignupHeader";
import SignupFooter from "./Signup/SignupFooter";
import MyChamp from "./Signup/MyChamp";
import Position from "./Signup/Position";
import { useSession } from "next-auth/react";
import KakaoLogin from "../common/LoginButton";
import IntroContainer from "./Signup/IntroContainer";

interface FormProps {
  nickName: string;
  position: string;
  tier: string;
  intro: string;
}

const SignupFormContainer = () => {
  const { register, handleSubmit, watch } = useForm<FormProps>();
  const { status } = useSession();
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
        ) : (
          <IntroContainer />
        )}
      </Grid>
      <div className="relative h-full w-full">
        {status === "authenticated" ? null : (
          <div className="absolute z-50 flex h-[70%] w-full items-center justify-center bg-black bg-opacity-90">
            <span>로그인 후 이용가능</span>
            <KakaoLogin />
          </div>
        )}
        <Grid width="w-full" height="h-[70%]">
          <form
            onSubmit={handleSubmit(onValid)}
            className="grid grid-cols-2 grid-rows-4 gap-2"
          >
            <SignupHeader loading={loading} setLoading={setLoading} />
            <NickName register={register("nickName")} />
            <Introduce register={register("intro")} />
            <Tier register={register("tier")} watch={watch("tier")} />
            <Position
              register={register("position")}
              watch={watch("position")}
            />
            <MyChamp setOpen={setOpen} />
          </form>
        </Grid>
        <SignupFooter />
      </div>
    </>
  );
};

export default SignupFormContainer;
