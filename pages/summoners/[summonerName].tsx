import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import SummonerDetailContainer from "../../components/container/SummonerDetailContainer";
import { useGetSummoner } from "../../core/api/summoner";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";
import { useRouter } from "next/router";

const Summoners = () => {
  const { query } = useRouter();
  const {
    data: Summoner,
    error,
    isLoading,
  } = useGetSummoner(String(query.summonerName));
  return (
    <PageContainer space="space-x-4">
      <Seo
        title={Summoner === undefined ? "정보없음" : String(query.summonerName)}
      />
      {isLoading ? (
        <LoadingContainer />
      ) : Summoner === undefined ? (
        <Grid width="w-full" height="h-full">
          <span>{error?.response.data.message}</span>
        </Grid>
      ) : (
        <>
          <SummonerDetailContainer
            Summoner={Summoner}
            summonerName={String(query.summonerName)}
          />
          <Grid width="w-full min-w-[350px]" height="h-[calc(100%+1rem)]">
            <CommentsFormContainer
              category="summoner"
              champId={Summoner.summonerName}
            />
          </Grid>
        </>
      )}
    </PageContainer>
  );
};

export default Summoners;
