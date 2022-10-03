import dynamic from "next/dynamic";
import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
const ChampionsContainer = dynamic(
  () => import("../components/container/ChampionsContainer"),
  { ssr: false }
);
const DuoRankContainer = dynamic(
  () => import("../components/container/DuoRankContainer"),
  { ssr: false }
);
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
              height="max-h-[calc(100%-3.5rem)]"
            />
          </Grid>
          <Grid width="w-full" height="h-full">
            <DuoRankContainer />
          </Grid>
        </>
      )}
    </PageContainer>
  );
};

export default MainPage;
