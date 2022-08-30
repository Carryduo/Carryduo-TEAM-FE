import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  register: UseFormRegisterReturn;
  type: "text" | "password" | "email" | "file";
  autoFocus: boolean;
  placeHolder : string;
}

const Input = ({ register, type, autoFocus , placeHolder }: InputProps) => {
  return <input placeholder={placeHolder} autoFocus={autoFocus} {...register} type={type} />;
};

export default Input;
