import { dehydrate, QueryClient } from "react-query";
import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import ChampionsContainer from "../components/container/ChampionsContainer";
import DuoRankContainer from "../components/container/DuoRankContainer";
import LoadingContainer from "../components/layouts/Handler/LoadingContainer";
import { getChamps } from "../core/api/champions/queries";
import { useLoading } from "../util/hooks/useLoading";
import { queryClient } from "./_app";

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
              gridCol="grid-cols-5"
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

export const getStaticProps = async () => {
  try {
    await queryClient.fetchQuery(["Champs"], getChamps);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
};
