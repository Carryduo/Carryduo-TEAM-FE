import KakaoLogin from "../components/common/LoginButton";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";

const login = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="로그인" />
      <div className="flex h-full w-full items-center justify-center">
        <KakaoLogin />
      </div>
    </PageContainer>
  );
};

export default login;
