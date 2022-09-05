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
    <header className="flex h-24 w-full items-center justify-between">
      <div className="flex space-x-14">
        <span className="text-2xl font-semibold">LOGO</span>
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            opacity={20}
            placeHolder="소환사명 입력"
            autoFocus={false}
            type="text"
            register={register("nickName", { required: true })}
          />
        </form>
      </div>
      <div className="space-x-20">
        <Link href="/">
          <span className="font-sans">챔피언 리스트</span>
        </Link>
        <span>대전 시뮬레이션</span>
        <LoginModal />
      </div>
    </header>
  );
};

export default HeaderMain;
