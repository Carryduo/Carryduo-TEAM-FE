import { UseFormRegisterReturn } from "react-hook-form";
import Input from "../../common/Input";

interface IntroduceFormProp {
  register: UseFormRegisterReturn;
}

const Introduce = ({ register }: IntroduceFormProp) => {
  return (
    <div className="flex flex-col space-y-2">
      <span>자기소개</span>
      <Input
        rounded="rounded-xl"
        width="w-full"
        type="text"
        register={register}
        placeHolder="50자 이내"
      />
    </div>
  );
};

export default Introduce;
