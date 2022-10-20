import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import SummonerDetailContainer from "../../components/container/SummonerDetailContainer";
import { useRouter } from "next/router";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";
import { useLoading } from "../../util/hooks/useLoading";
import { getSummoner, useGetSummoner } from "../../core/api/summoner/queries";
import { GetStaticPaths } from "next";
import { queryClient } from "../_app";
import { dehydrate } from "react-query";

interface Prop {
  summonerName: string;
}

interface PageProps {
  params: Prop;
}

const Summoners = ({ summonerName }: Prop) => {
  const loading = useLoading();
  const { data: Summoner, error, isFetching } = useGetSummoner(summonerName);
  if (isFetching) {
    return (
      <PageContainer>
        <LoadingContainer text="유저를 검색중입니다" />
      </PageContainer>
    );
  }
  return (
    <PageContainer space="space-x-4">
      <Seo title={Summoner === undefined ? "정보없음" : summonerName} />
      {loading ? (
        <LoadingContainer text="loading..." />
      ) : Summoner === undefined ? (
        <LoadingContainer text={String(error?.response.data.message)} />
      ) : (
        <>
          <SummonerDetailContainer
            Summoner={Summoner}
            summonerName={summonerName}
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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: PageProps) => {
  const summonerName = context.params.summonerName;
  try {
    await queryClient.fetchQuery(["Summoner", summonerName], () =>
      getSummoner(summonerName)
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        summonerName,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
};
