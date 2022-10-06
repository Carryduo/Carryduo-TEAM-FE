import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { getLanguage } from "../../../core/config/i18n";
import { useSweet } from "../../../util/hooks/useSweet";
import { getCookie } from "../../../util/servers/cookie";
import Input from "../../common/Input";

interface FormProps {
  nickName: string;
}

const HeaderMain = () => {
  const { register, handleSubmit } = useForm<FormProps>();
  const router = useRouter();
  const { locale } = router;
  const onValid: SubmitHandler<FormProps> = ({ nickName }) => {
    router.push({
      pathname: `/summoners/${nickName}`,
    });
  };
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push("/", {
      query: locale,
    });
  };
  return (
    <header className="flex h-24 w-full items-center justify-between">
      <div className="flex space-x-14">
        <Link href="/">
          <span className="cursor-pointer text-2xl font-semibold">
            Carryduo
          </span>
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
      </div>
      <div className="space-x-12">
        <select onChange={changeLanguage} defaultValue={locale}>
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
        <Link href="/">
          <span className="cursor-pointer">챔피언 리스트</span>
        </Link>
        <span
          onClick={() => useSweet(2000, "info", "준비 중 입니다")}
          className="cursor-default text-gray-600"
        >
          대전 시뮬레이션
        </span>
        <Link href={getCookie("myToken") === undefined ? "/login" : "/setting"}>
          <span className="cursor-pointer">
            {getCookie("myToken") === undefined ? "로그인" : "설정"}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default HeaderMain;
