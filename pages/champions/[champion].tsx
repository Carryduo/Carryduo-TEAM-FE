import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { useRouter } from "next/router";
import ChampionDetailContainer from "../../components/container/ChampionDetailContainer";
import { GetServerSideProps, GetStaticPaths } from "next";

const Champion = () => {
  const { query } = useRouter();
  return (
    <PageContainer space="space-x-4">
      <Seo title={String(query.name)} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[900px]" height="h-1/2">
          <ChampionDetailContainer champId={Number(query.champion)} />
        </Grid>
        <Grid width="w-[900px]" height="h-1/2">
          <span>챔피언 조합 승률 모스트</span>
        </Grid>
      </div>
      <Grid width="w-full min-w-[550px]" height="h-[calc(100%+1rem)]">
        <CommentsFormContainer
          category="champ"
          champId={Number(query.champion)}
        />
      </Grid>
    </PageContainer>
  );
};

export default Champion;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.category === undefined) {
    return { notFound: true };
  }
  return { props: {} };
};
