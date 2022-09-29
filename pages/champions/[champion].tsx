import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import ChampionDetailContainer from "../../components/layouts/Champion/ChampionDetailContainer";
import CommentsFormContainer from "../../components/layouts/CommentsFormContainer";
import { getCookie } from "../../util/servers/cookie";

interface PageProps {
  query: Props;
}

interface Props {
  champId: number;
  name: string;
  category: string;
  champion: string;
}

const Champion = ({ champId, name, category }: Props) => {
  return (
    <PageContainer space="space-x-4">
      <Seo title={name} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[700px]" height="h-1/2">
          <ChampionDetailContainer champId={champId} />
        </Grid>
        <Grid width="w-[700px]" height="h-1/2">
          <span>챔피언 조합 승률 모스트</span>
        </Grid>
      </div>
      <Grid width="w-full" height="h-[calc(100%+1rem)]">
        {getCookie("myToken") === undefined ? null : (
          <CommentsFormContainer category={category} champId={champId} />
        )}
      </Grid>
    </PageContainer>
  );
};

export default Champion;

export const getServerSideProps = (context: PageProps) => {
  const propsData = context.query;
  if (propsData.name === undefined) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      champId: Number(propsData.champion),
      name: propsData.name,
      category: propsData.category,
    },
  };
};
