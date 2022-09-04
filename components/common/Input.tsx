import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  register: UseFormRegisterReturn;
  type: "text" | "password" | "email" | "file";
  autoFocus?: boolean;
  placeHolder: string;
  opacity?: number;
}

const Input = ({
  register,
  type,
  autoFocus,
  placeHolder,
  opacity,
}: InputProps) => {
  return (
    <input
      className={`h-8 w-[300px] rounded-2xl bg-white bg-opacity-[${opacity}%] px-4 outline-none`}
      placeholder={placeHolder}
      autoFocus={autoFocus}
      {...register}
      type={type}
    />
  );
};

export default Input;
