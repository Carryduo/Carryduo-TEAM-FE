import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";

const Simulation = () => {
  return (
    <PageContainer>
      <Grid width="w-full" height="h-full">
        <div className="flex w-full justify-center">
          <span className="text-2xl">대전 시뮬레이션</span>
        </div>
        <div></div>
      </Grid>
    </PageContainer>
  );
};

export default Simulation;
