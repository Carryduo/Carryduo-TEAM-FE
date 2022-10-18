import Router from "next/router";
import { instance } from "../../../core/api/axios";
import { useSweet } from "../../../util/hooks/useSweet";
import { removeCookie } from "../../../util/servers/cookie";

const SignupFooter = () => {
  return (
    <div className="mt-4 h-[30%] w-full">
      <header className="h-10 w-full space-x-12 border-b-[1px] pl-4">
        <span>제작소개</span>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
      </header>
      <footer className="flex h-[calc(100%-2.5rem)] w-full items-end">
        <div className="flex w-full items-end justify-between pl-4">
          <div>
            <span
              onClick={() => {
                instance
                  .delete("/admin")
                  .then(() => {
                    removeCookie("myToken");
                    Router.push("/");
                  })
                  .catch((err) => {
                    useSweet(1000, "error", err.response.data.message);
                  });
              }}
              className="cursor-pointer font-light text-gray-700 underline"
            >
              회원탈퇴
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-4xl">LOGO</span>
            <small className="text-white">
              Copyright, logo.All rights reserved.
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignupFooter;
