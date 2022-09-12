interface SignupFooterProps {
  setting: boolean;
}

const SignupFooter = ({ setting }: SignupFooterProps) => {
  return (
    <div className="h-[30%] w-full mt-4">
      <header className="h-10 w-full space-x-12 border-b-[1px] pl-4">
        <span>제작소개</span>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
      </header>
      <footer className="flex h-[calc(100%-2.5rem)] w-full items-end">
        <div className="flex w-full items-end justify-between pl-4">
          <div>
            {setting ? (
              <span className="font-light text-gray-700 underline">
                회원탈퇴
              </span>
            ) : null}
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
