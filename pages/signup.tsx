import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import SignupFormContainer from "../components/layouts/Signup/SignupFormContainer";

const Signup = () => {
  return (
    <PageContainer>
      <Grid width="w-full" height="h-full">
        <SignupFormContainer setting={false} />
      </Grid>
    </PageContainer>
  );
};

export default Signup;
