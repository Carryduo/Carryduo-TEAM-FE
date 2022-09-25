import Grid from "../common/Grid";
import PageContainer from "../common/PageContainer";

const LoadingPage = () => {
  return (
    <PageContainer>
      <Grid width="w-full" height="h-full">
        <div className="w-full h-full flex justify-center items-center"><span className="text-2xl">Loading...</span></div>
      </Grid>
    </PageContainer>
  );
};

export default LoadingPage;
