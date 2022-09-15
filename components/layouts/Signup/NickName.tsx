import { UseFormRegisterReturn } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { getMyProfile } from "../../../core/config/toekn";
import Input from "../../common/Input";

interface NickNameFormProp {
  register: UseFormRegisterReturn;
}

const NickName = ({ register }: NickNameFormProp) => {
  const profile = useRecoilValue(getMyProfile);
  return (
    <div className="flex flex-col space-y-2">
      <span>닉네임</span>
      <Input
        rounded="rounded-xl"
        type="text"
        register={register}
        placeHolder="15자 이내"
        value={profile.nickname}
      />
    </div>
  );
};

export default NickName;
