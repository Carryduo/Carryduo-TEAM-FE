import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import SignupFormContainer from "../components/layouts/SignupFormContainer";

const Signup = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="회원가입" />
      <SignupFormContainer setting={false} />
    </PageContainer>
  );
};

export default Signup;
