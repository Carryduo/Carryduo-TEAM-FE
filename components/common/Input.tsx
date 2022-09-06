import { UseFormRegisterReturn } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";

interface InputProps {
  register?: UseFormRegisterReturn;
  type: "text" | "password" | "email" | "file" | "radio";
  autoFocus?: boolean;
  placeHolder?: string;
  onChange?: _.DebouncedFunc<(e: React.ChangeEvent<HTMLInputElement>) => void>;
  width?: string;
  rounded?: string;
  value?: string;
  openSearch?: boolean;
}

const Input = ({
  register,
  type,
  autoFocus,
  placeHolder,
  onChange,
  width,
  rounded,
  value,
  openSearch,
}: InputProps) => {
  return (
    <div className="relative">
      <input
        className={`h-8 ${width} ${rounded} bg-gray-500 bg-opacity-30 px-4 text-white outline-none placeholder:text-gray-400`}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        onChange={onChange}
        {...register}
        type={type}
        value={value}
      />
      {openSearch ? (
        <div className="absolute top-[2px] right-3 text-gray-400">
          <SearchIcon />
        </div>
      ) : null}
    </div>
  );
};

export default Input;
