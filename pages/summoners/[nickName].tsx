import { useRouter } from "next/router";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";

const Summoners = () => {
  const {
    query: { nickName },
  } = useRouter();
  return (
    <PageContainer space="space-x-4">
      <Seo title={String(nickName)} />
      <div className="w-full h-full space-y-4">
        <Grid width="w-[700px]" height="h-1/2">
          <span>소환사 정보 {nickName}</span>
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
