import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";

const Profile = () => {
  return (
    <PageContainer>
      <Seo title="설정" />
      <Grid width="w-full" height="h-full">
        <span>설정</span>
      </Grid>
    </PageContainer>
  );
};

export default Profile;
