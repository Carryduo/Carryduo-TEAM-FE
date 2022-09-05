import { useSetRecoilState } from "recoil";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { getShadowColor } from "../../core/config/shadowColor";

const Profile = () => {
  const setColor = useSetRecoilState(getShadowColor);
  return (
    <PageContainer>
      <Seo title="설정" />
      <Grid width="w-full" height="h-full">
        <span>설정</span>
        <span onClick={() => setColor(1)}>1</span>
        <span onClick={() => setColor(2)}>2</span>
        <span onClick={() => setColor(3)}>3</span>
      </Grid>
    </PageContainer>
  );
};

export default Profile;
