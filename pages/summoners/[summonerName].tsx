import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { useGetSummoner } from "../../core/api/summoner";

interface pageProps {
  query: Props;
}

interface Props {
  summonerName: string;
}

const Summoners = ({ summonerName }: Props) => {
  const { data } = useGetSummoner(summonerName);
  return (
    <PageContainer space="space-x-4">
      <Seo title={summonerName} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[700px]" height="h-1/2">
          <span>소환사 정보{summonerName}</span>
        </Grid>
        <Grid width="w-[700px]" height="h-1/2">
          <span>소환사 모스트 픽</span>
        </Grid>
      </div>
      <Grid width="w-full" height="h-[calc(100%+1rem)]">
        <span>평판</span>
      </Grid>
    </PageContainer>
  );
};

export default Summoners;

export const getServerSideProps = (context: pageProps) => {
  const propsData = context.query;
  return {
    props: {
      summonerName: propsData.summonerName,
    },
  };
};
