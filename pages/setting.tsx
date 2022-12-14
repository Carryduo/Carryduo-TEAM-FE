import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import SignupFormContainer from "../components/container/SignupFormContainer";

const Profile = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="설정" />
      <SignupFormContainer />
    </PageContainer>
  );
};

export default Profile;
