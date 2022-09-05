import Image from "next/image";
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
        <div className="grid h-[calc(100%-2.5rem)] grid-cols-5 gap-2 overflow-hidden overflow-y-scroll">
          {Champions?.map((data: any, i) => {
            console.log(data);
            return (
              <div key={i} className="h-20 w-14 text-center">
                <Image
                  alt=""
                  src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${data[0]}.png`}
                  width={56}
                  height={56}
                  loading="eager"
                />
                <span className="text-xs">{data[1].name}</span>
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
