import { useEffect } from "react";

// 카카오 로그인 인가코드
const Kakao = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    const Kakao = async (code: string) => {
      // return await instance
      //   .post(`/auth/kakao?code=${code}`)
      //   .then(() => {
      //     // navigate("/projectList");
      //   })
      //   .catch(() => {
      //     // navigate("/")
      //   });
    };
    if (code) {
      Kakao(code);
    }
  }, [code]);

  return <div>로그인 페이지</div>;
};

export default Kakao;
