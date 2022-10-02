import Grid from "../components/common/Grid";
import KakaoLogin from "../components/common/LoginButton";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";

const login = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="설정" />
      <span>로그인 후 이용가능</span>
      <KakaoLogin />
    </PageContainer>
  );
};

export default login;
