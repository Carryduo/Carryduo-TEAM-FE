import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";

const MainPage = () => {
  return (
    <PageContainer>
      <Grid width="w-[600px]" height="100%">
        <span>챔피언 리스트</span>
      </Grid>
      <Grid width="w-full" height="100%">
        <span>듀오 승률 리스트</span>
      </Grid>
    </PageContainer>
  );
};

export default MainPage;
