import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../common/Input";

import LoginModal from "../Header/LoginModal";

interface FormProps {
  nickName: string;
}

const HeaderMain = () => {
  const { register, handleSubmit } = useForm<FormProps>();
  const router = useRouter();
  const onValid: SubmitHandler<FormProps> = ({ nickName }) => {
    router.push({
      pathname: `/summoners/${nickName}`,
    });
  };
  return (
    <header className="flex h-10 w-full items-center justify-between bg-red-300 px-2">
      <Link href="/main">로고</Link>
      <form onSubmit={handleSubmit(onValid)}>
        <Input
          placeHolder="소환사명 입력"
          autoFocus={false}
          type="text"
          register={register("nickName", { required: true })}
        />
      </form>
      <LoginModal />
    </header>
  );
};

export default HeaderMain;
