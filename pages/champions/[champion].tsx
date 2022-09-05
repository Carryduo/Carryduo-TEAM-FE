import { useRouter } from "next/router";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";

const Champion = () => {
  const router = useRouter();
  return (
    <PageContainer space="space-x-4">
      <Seo title={String(router.query.champion)} />
      <div className="space-y-4">
        <Grid width="w-[700px]" height="h-[350px]">
          <span>챔피언 정보</span>
        </Grid>
        <Grid width="w-[700px]" height="h-[300px]">
          <span>챔피언 조합 승률 모스트</span>
        </Grid>
      </div>
      <Grid width="w-full" height="h-full">
        <span>평판</span>
      </Grid>
    </PageContainer>
  );
};

export default Champion;
