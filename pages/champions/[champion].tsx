import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { useRouter } from "next/router";
import ChampionDetailContainer from "../../components/container/ChampionDetailContainer";
import { GetStaticPaths } from "next";
import { instance } from "../../core/api/axios";
import { Champions } from "../../core/api/champions";

interface Prop {
  champion: string;
}

interface PageProps {
  params: Prop;
}

const Champion = ({ champion }: Prop) => {
  const { query } = useRouter();
  return (
    <PageContainer space="space-x-4">
      <Seo title={String(query.name)} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[900px]" height="h-1/2">
          <ChampionDetailContainer champId={Number(champion)} />
        </Grid>
        <Grid width="w-[900px]" height="h-1/2">
          <span>챔피언 조합 승률 모스트</span>
        </Grid>
      </div>
      <Grid width="w-full min-w-[550px]" height="h-[calc(100%+1rem)]">
        <CommentsFormContainer category="champ" champId={Number(champion)} />
      </Grid>
    </PageContainer>
  );
};

export default Champion;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: Champions } = await instance.get("/champ");
  return {
    paths: Champions.map((data: Champions) => {
      return {
        params: {
          champion: data.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context: PageProps) => {
  const { champion } = context.params;
  return {
    props: { champion },
  };
};
