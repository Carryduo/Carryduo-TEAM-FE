import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSweet } from "../../../util/hooks/useSweet";
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
        <Link href="/">
          <span className="cursor-pointer text-2xl font-semibold">LOGO</span>
        </Link>
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            rounded="rounded-2xl"
            width="w-[20rem]"
            placeHolder="소환사명 입력"
            autoFocus={false}
            type="text"
            register={register("nickName", { required: true })}
          />
        </form>
      </div>
      <div className="space-x-12">
        <Link href="/">
          <span className="cursor-pointer">챔피언 리스트</span>
        </Link>
        <span
          onClick={() => useSweet(2000, "info", "준비 중 입니다")}
          className="cursor-default text-gray-600"
        >
          대전 시뮬레이션
        </span>
        <Link href={`/setting/봄날의 햇살 룰루`}>
          <span className="cursor-pointer">설정</span>
        </Link>
        <LoginModal />
      </div>
    </header>
  );
};

export default HeaderMain;
