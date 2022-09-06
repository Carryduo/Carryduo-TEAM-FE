import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import ChampionsContainer from "../components/layouts/Home/ChampionsContainer";

const MainPage = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="Home" />
      <Grid width="w-[40rem]" height="100%">
        <ChampionsContainer />
      </Grid>
      <Grid width="w-full" height="100%">
        <span>듀오 승률 순위표</span>
      </Grid>
    </PageContainer>
  );
};

export default MainPage;
