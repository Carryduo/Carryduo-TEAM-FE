import dynamic from "next/dynamic";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
const SignupFormContainer = dynamic(
  () => import("../components/layouts/SignupFormContainer"),
  {
    ssr: false,
  }
);

const Profile = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="설정" />
      <SignupFormContainer />
    </PageContainer>
  );
};

export default Profile;
