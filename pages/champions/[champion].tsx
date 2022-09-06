import { useRouter } from "next/router";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";

const Champion = () => {
  const router = useRouter();
  return (
    <PageContainer space="space-x-4">
      <Seo title={String(router.query.champion)} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[700px]" height="h-1/2">
          <span>챔피언 정보</span>
        </Grid>
        <Grid width="w-[700px]" height="h-1/2">
          <span>챔피언 조합 승률 모스트</span>
        </Grid>
      </div>
      <Grid width="w-full" height="h-[calc(100%+1rem)]">
        <span>평판</span>
      </Grid>
    </PageContainer>
  );
};

export default Champion;
