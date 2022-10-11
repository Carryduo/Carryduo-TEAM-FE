import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import SimulationPickContainer from "../../components/container/SimulationPickContainer";

const Position = () => {
  return (
    <PageContainer>
      <Grid width="w-full" height="h-full">
        <SimulationPickContainer />
      </Grid>
    </PageContainer>
  );
};

export default Position;
