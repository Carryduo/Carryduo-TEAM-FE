import Grid from "../components/common/Grid";
import KakaoLogin from "../components/common/LoginButton";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import SignupFormContainer from "../components/container/SignupFormContainer";
import { getCookie } from "../util/servers/cookie";

const Profile = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="설정" />
      {getCookie("myToken") === undefined ? (
        <Grid width="w-full" height="h-full">
          <span>로그인 후 이용가능</span>
          <KakaoLogin />
        </Grid>
      ) : (
        <SignupFormContainer />
      )}
    </PageContainer>
  );
};

export default Profile;
