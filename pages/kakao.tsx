// 카카오 로그인 인가코드
const Kakao = () => {
  if (typeof window !== undefined) return;
  // useEffect(() => {
  // const code = new URL(window.location.href).searchParams.get("code");
  //   const Kakao = async (code: string) => {
  //     return await instance
  //       .post(`/auth/kakao?code=${code}`)
  //       .then(() => {
  //         // navigate("/projectList");
  //       })
  //       .catch(() => {
  //         // navigate("/")
  //       });
  //   };
  //   if (code) {
  //     Kakao(code);
  //   }
  // }, [code]);

  return <div>로그인</div>;
};

export default Kakao;
