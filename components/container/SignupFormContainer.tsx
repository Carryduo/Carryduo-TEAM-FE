import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SubmitHandler, useForm } from "react-hook-form";
import { PickChampion } from "../../core/config/pickChampion";
import ChampionsContainer from "./ChampionsContainer";
import Grid from "../common/Grid";
import NickName from "../layouts/Signup/NickName";
import Introduce from "../layouts/Signup/Introduce";
import Tier from "../layouts/Signup/Tier";
import SignupHeader from "../layouts/Signup/SignupHeader";
import SignupFooter from "../layouts/Signup/SignupFooter";
import MyChamp from "../layouts/Signup/MyChamp";
import Position from "../layouts/Signup/Position";
import IntroContainer from "../layouts/Signup/IntroContainer";
import {
  useGetMyProfile,
  usePostMyProfile,
} from "../../core/api/profile/queries";

interface FormProps {
  nickName: string;
  position: string;
  tier: string;
  bio: string;
  preferPosition: string;
}

const SignupFormContainer = () => {
  const { data: profile } = useGetMyProfile();
  const { id, champNameEn } = useRecoilValue(PickChampion);
  const setImage = useSetRecoilState(PickChampion);
  const defaultValues = {
    nickName: profile?.nickname,
    bio: profile?.bio,
    tier: String(profile?.tier),
    preferPosition: profile?.preferPosition,
    enableChat: profile?.enableChat,
  };
  const { register, handleSubmit, watch, reset } = useForm<FormProps>({
    defaultValues,
  });
  useEffect(() => {
    if (profile?.preferChamp1?.champNameEn !== champNameEn) {
      setImage({ id: 0, champNameEn: "", champImg: "", champNameKo: "" });
    }
    if (profile) reset({ ...defaultValues });
  }, [profile]);
  const [open, setOpen] = useState<boolean>(false);
  const { mutate } = usePostMyProfile();
  const onValid: SubmitHandler<FormProps> = (data) => {
    const options = {
      nickname: data.nickName,
      profileImg: String(profile?.profileImg),
      bio: data.bio,
      preferPosition: data.preferPosition,
      tier: Number(data.tier),
      enableChat: true,
      preferChamp1: id === 0 ? profile?.preferChamp1?.id : id,
      preferChamp2: 85,
      preferChamp3: 23,
    };
    mutate(options);
  };
  return (
    <>
      <Grid width="w-[40rem]" height="h-[calc(100%+1rem)]">
        {open ? (
          <ChampionsContainer
            gridCol="grid-cols-5"
            width="w-[420px]"
            height="h-[calc(100%-3.5rem)]"
            toLink={false}
          />
        ) : (
          <IntroContainer />
        )}
      </Grid>
      <div className="h-full w-full">
        <Grid width="w-full" height="h-[70%]" scroll="overflow-y-scroll">
          <form
            onSubmit={handleSubmit(onValid)}
            className="grid grid-cols-2 grid-rows-4 gap-2"
          >
            <SignupHeader />
            <NickName register={register("nickName")} />
            <Introduce register={register("bio")} />
            <Tier register={register("tier")} watch={watch("tier")} />
            <Position
              register={register("preferPosition")}
              watch={watch("preferPosition")}
            />
            <MyChamp
              setOpen={setOpen}
              img={profile?.preferChamp1?.champNameEn}
            />
          </form>
        </Grid>
        <SignupFooter />
      </div>
    </>
  );
};

export default SignupFormContainer;
