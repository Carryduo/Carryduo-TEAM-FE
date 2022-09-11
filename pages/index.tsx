import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import ChampionsContainer from "../components/layouts/Home/ChampionsContainer";
import DuoRankContainer from "../components/layouts/Home/DuoRankContainer";

const MainPage = () => {
  return (
    <PageContainer space="space-x-4">
      <Seo title="Home" />
      <Grid width="w-[40rem]" height="100%">
        <ChampionsContainer toLink={true} height="h-[calc(100%-3.5rem)]" />
      </Grid>
      <Grid width="w-full" height="100%">
        <DuoRankContainer />
      </Grid>
    </PageContainer>
  );
};

export default MainPage;
