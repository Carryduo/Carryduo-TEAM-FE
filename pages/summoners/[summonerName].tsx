import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import SummonerDetailContainer from "../../components/container/SummonerDetailContainer";
import { useGetSummoner } from "../../core/api/summoner";
import { getCookie } from "../../util/servers/cookie";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";

interface pageProps {
  query: Props;
}

interface Props {
  summonerName: string;
  category: string;
}

const Summoners = ({ summonerName, category }: Props) => {
  const { data: Summoner, error, isLoading } = useGetSummoner(summonerName);
  return (
    <PageContainer space="space-x-4">
      <Seo title={Summoner === undefined ? "정보없음" : summonerName} />
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
            summonerName={summonerName}
          />
          <Grid width="w-full min-w-[350px]" height="h-[calc(100%+1rem)]">
            {getCookie("myToken") === undefined ? null : (
              <CommentsFormContainer
                category={category}
                champId={Summoner.summonerName}
              />
            )}
          </Grid>
        </>
      )}
    </PageContainer>
  );
};

export default Summoners;

export const getServerSideProps = (context: pageProps) => {
  const propsData = context.query;
  return {
    props: {
      summonerName: propsData.summonerName,
      category: "summoner",
    },
  };
};
