import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import SummonerDetailContainer from "../../components/container/SummonerDetailContainer";
import { useGetSummoner } from "../../core/api/summoner";
import { useRouter } from "next/router";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";

const Summoners = () => {
  const { query } = useRouter();
  const {
    data: Summoner,
    error,
    isFetching,
  } = useGetSummoner(String(query.summonerName));
  if (isFetching) {
    // 검색 중 페이지 만들기
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
      {Summoner === undefined ? (
        <LoadingContainer text={String(error?.response.data.message)} />
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
