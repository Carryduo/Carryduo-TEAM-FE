import React from "react";
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
import IntroContainer from "./Signup/IntroContainer";
import { getCookie } from "../../util/servers/cookie";
import KakaoLogin from "../common/LoginButton";
import { useToken } from "../../util/hooks/useToken";
import { getMyProfile } from "../../core/config/toekn";

interface FormProps {
  nickName: string;
  position: string;
  tier: string;
  bio: string;
  preferPosition: string;
}

const SignupFormContainer = () => {
  useToken("/user/option");
  const profile = useRecoilValue(getMyProfile);
  const { register, handleSubmit, watch } = useForm<FormProps>({
    defaultValues: {
      nickName: profile.nickname,
      bio: profile.bio,
      tier: profile.tier,
      preferPosition: profile.preferPosition,
    },
  });
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
        {getCookie("myToken") === undefined ? (
          <div className="absolute z-50 flex h-[70%] w-full items-center justify-center bg-black bg-opacity-90">
            <span>로그인 후 이용가능</span>
            <KakaoLogin />
          </div>
        ) : null}
        <Grid width="w-full" height="h-[70%]">
          <form
            onSubmit={handleSubmit(onValid)}
            className="grid grid-cols-2 grid-rows-4 gap-2"
          >
            <SignupHeader
              token={getCookie("myToken")}
              loading={loading}
              setLoading={setLoading}
            />
            <NickName register={register("nickName")} />
            <Introduce register={register("bio")} />
            <Tier register={register("tier")} watch={watch("tier")} />
            <Position
              register={register("preferPosition")}
              watch={watch("preferPosition")}
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
