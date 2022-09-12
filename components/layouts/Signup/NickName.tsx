import { useSession } from "next-auth/react";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "../../common/Input";

interface NickNameFormProp {
  register: UseFormRegisterReturn;
}

const NickName = ({ register }: NickNameFormProp) => {
  const { data } = useSession();
  return (
    <div className="flex flex-col space-y-2">
      <span>닉네임</span>
      <Input
        rounded="rounded-xl"
        type="text"
        register={register}
        placeHolder="15자 이내"
        value={data?.user?.name === undefined ? "" : String(data?.user?.name)}
      />
    </div>
  );
};

export default NickName;
