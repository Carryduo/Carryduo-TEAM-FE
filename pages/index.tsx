import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import ChampionsContainer from "../components/container/ChampionsContainer";
import DuoRankContainer from "../components/container/DuoRankContainer";
import LoadingContainer from "../components/layouts/Handler/LoadingContainer";
import { useLoading } from "../util/hooks/useLoading";

const MainPage = () => {
  const loading = useLoading();
  return (
    <PageContainer space="space-x-4">
      <Seo title="Home" />
      {loading ? (
        <LoadingContainer text="loading..." />
      ) : (
        <>
          <Grid width="w-[40rem]" height="h-full">
            <ChampionsContainer
              toLink={true}
              height="h-[calc(100%-3.5rem)]"
              width="w-[420px]"
            />
          </Grid>
          <Grid width="min-w-[780px] w-full" height="h-full">
            <DuoRankContainer />
          </Grid>
        </>
      )}
    </PageContainer>
  );
};

export default MainPage;
