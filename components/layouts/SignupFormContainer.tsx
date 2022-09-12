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
            <SignupHeader
              setting={setting}
              loading={loading}
              setLoading={setLoading}
            />
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
        <SignupFooter setting={setting} />
      </div>
    </>
  );
};

export default SignupFormContainer;