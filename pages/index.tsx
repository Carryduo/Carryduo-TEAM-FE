import Link from "next/link";
import Grid from "../components/common/Grid";
import PageContainer from "../components/common/PageContainer";
import Seo from "../components/common/Seo";
import { useChampions } from "./api/champions";

const MainPage = () => {
  const { data: Champions, isError } = useChampions();
  return (
    <PageContainer space="space-x-4">
      <Seo title="Home" />
      <Grid width="w-[40rem]" height="100%">
        <span>챔피언 리스트</span>
        <div className="grid h-[calc(100%-2.5rem)] grid-cols-5 gap-2 overflow-y-scroll">
          {Champions?.data.map((data) => {
            return (
              <div key={data.id} className="h-8 w-8 bg-white">
                <Link href={`/champions/${data.name}`}>
                  {data.name.substring(0, 3)}
                </Link>
              </div>
            );
          })}
        </div>
      </Grid>
      <Grid width="w-full" height="100%">
        <span>듀오 승률 순위표</span>
      </Grid>
    </PageContainer>
  );
};

export default MainPage;
