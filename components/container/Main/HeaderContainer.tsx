import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetVersion } from "../../../core/api/duoChampion/queries";
import { getCookie } from "../../../util/servers/cookie";
import Input from "../../common/Input";
import PickLine from "../../common/PickLine";

interface FormProps {
  nickName: string;
}

const HeaderMain = () => {
  const { data } = useGetVersion();
  const { register, handleSubmit } = useForm<FormProps>();
  const router = useRouter();

  const onValid: SubmitHandler<FormProps> = ({ nickName }) => {
    router.push({ pathname: `/summoners/${nickName}` });
  };

  const isLoggedIn = getCookie("myToken") !== undefined;

  return (
    <header className="flex h-24 w-full items-center justify-between">
      <div className="flex space-x-14">
        <Link href="/">
          <a>
            <span className="cursor-pointer text-2xl font-semibold">
              Carryduo
            </span>
          </a>
        </Link>
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            rounded="rounded-2xl"
            width="w-[20rem]"
            placeHolder="소환사명 입력"
            autoFocus={false}
            type="text"
            register={register("nickName", { required: true })}
            openSearch={true}
          />
        </form>
        <span>version: {data?.version}</span>
      </div>
      <div className="flex h-7 space-x-12">
        <Link href="/">
          <a>
            <div className="flex w-[140px] cursor-pointer flex-col items-center text-center">
              {router.pathname === "/" ? (
                <>
                  <span>챔피언 리스트</span>
                  <PickLine animate="animate-lgLine" />
                </>
              ) : (
                <span className="text-gray-300 hover:text-white">
                  챔피언 리스트
                </span>
              )}
            </div>
          </a>
        </Link>
        <Link href="/simulation">
          <a>
            <div className="flex w-[140px] cursor-pointer flex-col items-center text-center">
              {router.pathname === "/simulation" ? (
                <>
                  <span>가상 대전</span>
                  <PickLine animate="animate-lgLine" />
                </>
              ) : (
                <span className="text-gray-300 hover:text-white">
                  가상 대전
                </span>
              )}
            </div>
          </a>
        </Link>
        <Link href={isLoggedIn ? "/setting" : "/login"}>
          <a>
            {isLoggedIn ? (
              <span className="cursor-pointer">설정</span>
            ) : (
              <div className="relative">
                <div className="absolute -top-1 -right-2 h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="cursor-pointer">로그인</span>
              </div>
            )}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default HeaderMain;
