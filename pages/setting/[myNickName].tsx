import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import SignupFormContainer from "../../components/layouts/Signup/SignupFormContainer";


const Profile = () => {
  return (
    <PageContainer>
      <Seo title="설정" />
      <Grid width="w-full" height="h-full">
        <SignupFormContainer setting={true} />
      </Grid>
    </PageContainer>
  );
};

export default Profile;
