import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  register: UseFormRegisterReturn;
  type: "text" | "password" | "email" | "file";
  autoFocus?: boolean;
  placeHolder: string;
}

const Input = ({ register, type, autoFocus, placeHolder }: InputProps) => {
  return (
    <input
      className={`h-8 w-[20rem] rounded-2xl bg-white  px-4 outline-none`}
      placeholder={placeHolder}
      autoFocus={autoFocus}
      {...register}
      type={type}
    />
  );
};

export default Input;
