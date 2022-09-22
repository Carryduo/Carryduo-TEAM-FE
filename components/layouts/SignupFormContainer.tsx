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
import { useGetMyProfile, usePostMyProfile } from "../../core/api/myProfile";

interface FormProps {
  nickName: string;
  position: string;
  tier: string;
  bio: string;
  preferPosition: string;
}

const SignupFormContainer = () => {
  const { data: profile } = useGetMyProfile();
  const defaultValues = {
    nickName: profile?.data.nickname,
    bio: profile?.data.bio,
    tier: profile?.data.tier,
    preferPosition: profile?.data.preferPosition,
    enableChat: profile?.data.enableChat,
  };

  const { register, handleSubmit, watch, reset } = useForm<FormProps>({
    defaultValues,
  });
  React.useEffect(() => {
    if (profile) reset({ ...defaultValues });
  }, [profile]);
  const { id } = useRecoilValue(PickChampion);
  const [open, setOpen] = React.useState<boolean>(false);
  const { mutate } = usePostMyProfile();
  const onValid: SubmitHandler<FormProps> = (data) => {
    const options = {
      nickname: data.nickName,
      profileImg: String(profile?.data.profileImg),
      bio: data.bio === null ? "" : data.bio,
      preferPosition: data.preferPosition === null ? "" : data.preferPosition,
      tier: data.tier === null ? "" : data.tier,
      enableChat: true,
      preferChamp1: id === 0 ? Number(profile?.data?.preferChamp1?.id) : id,
      preferChamp2: 85,
      preferChamp3: 23,
    };
    mutate(options);
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
            <SignupHeader token={getCookie("myToken")} />
            <NickName register={register("nickName")} />
            <Introduce register={register("bio")} />
            <Tier register={register("tier")} watch={watch("tier")} />
            <Position
              register={register("preferPosition")}
              watch={watch("preferPosition")}
            />
            <MyChamp
              setOpen={setOpen}
              img={profile?.data?.preferChamp1?.champNameEn}
            />
          </form>
        </Grid>
        <SignupFooter />
      </div>
    </>
  );
};

export default SignupFormContainer;
