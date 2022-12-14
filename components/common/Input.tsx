import { UseFormRegisterReturn } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

interface InputProps {
  register?: UseFormRegisterReturn;
  type: "text" | "password" | "email" | "file" | "radio";
  autoFocus?: boolean;
  placeHolder?: string;
  onChange?: _.DebouncedFunc<(e: React.ChangeEvent<HTMLInputElement>) => void>;
  width?: string;
  rounded?: string;
  value?: string;
  defaultValue?: string;
  openSearch?: boolean;
  openSubmit?: boolean;
  maxLength?: number;
  cursor?: boolean;
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
  openSubmit,
  maxLength,
  cursor,
}: InputProps) => {
  return (
    <div className="relative">
      <input
        className={`h-8 ${width} ${rounded} ${
          cursor ? "cursor-not-allowed" : ""
        } bg-gray-500 bg-opacity-30 px-4 text-white outline-none placeholder:text-gray-400 `}
        placeholder={placeHolder}
        autoFocus={autoFocus}
        onChange={onChange}
        {...register}
        type={type}
        defaultValue={value}
        disabled={cursor ? true : false}
        autoComplete="off"
        maxLength={maxLength}
      />
      {openSearch ? (
        <button
          type="submit"
          className="absolute top-[2px] right-3 text-gray-400"
          aria-label={type}
        >
          <SearchIcon className="h-6 w-6" />
        </button>
      ) : null}
      {openSubmit ? (
        <button
          type="submit"
          className="absolute top-[2px] right-3 text-gray-400"
          aria-label={type}
        >
          <AddIcon className="h-6 w-6" />
        </button>
      ) : null}
    </div>
  );
};

export default Input;
