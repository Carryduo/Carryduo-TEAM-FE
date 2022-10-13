import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import SummonerDetailContainer from "../../components/container/SummonerDetailContainer";
import { useRouter } from "next/router";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";
import { useLoading } from "../../util/hooks/useLoading";
import { useGetSummoner } from "../../core/api/summoner/queries";

const Summoners = () => {
  const { query, reload } = useRouter();
  const loading = useLoading();
  const {
    data: Summoner,
    error,
    isFetching,
  } = useGetSummoner(String(query.summonerName));
  if (isFetching) {
    return (
      <PageContainer>
        <LoadingContainer text="유저를 검색중입니다" />
      </PageContainer>
    );
  }
  return (
    <PageContainer space="space-x-4">
      <Seo
        title={Summoner === undefined ? "정보없음" : String(query.summonerName)}
      />
      {loading ? (
        <LoadingContainer text="loading..." />
      ) : Summoner === undefined ? (
        <LoadingContainer text={String(error?.response.data.message)} />
      ) : (
        <>
          <SummonerDetailContainer
            Summoner={Summoner}
            summonerName={String(query.summonerName)}
          />
          <Grid width="w-full min-w-[300px]" height="h-[calc(100%+1rem)]">
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
