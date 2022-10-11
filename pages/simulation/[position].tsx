import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import SimulationPickContainer from "../../components/container/SimulationPickContainer";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";
import { useLoading } from "../../util/hooks/useLoading";

const Position = () => {
  const loading = useLoading();
  return (
    <PageContainer>
      <Grid width="w-full" height="h-full">
        {loading ? (
          <LoadingContainer text="Loading..." />
        ) : (
          <SimulationPickContainer />
        )}
      </Grid>
    </PageContainer>
  );
};

export default Position;
