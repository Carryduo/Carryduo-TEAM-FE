import Image from "next/image";
import { useRouter } from "next/router";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { useChampion } from "../apis/champion";

const Champion = () => {
  const router = useRouter();
  const { data } = useChampion(String(router.query.champion));
  console.log(data);
  return (
    <PageContainer space="space-x-4">
      <Seo title={String(router.query.champion)} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[700px]" height="h-1/2">
          <div className="flex">
            <Image
              width={120}
              height={100}
              loading="eager"
              alt=""
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data?.id}_0.jpg`}
            />
            <span className="text-2xl">{data?.id}</span>
            <div>
              {data?.spells?.map((data) => {
                return (
                  <div key={data.id}>
                    <Image
                      width={30}
                      height={30}
                      alt=""
                      loading="eager"
                      src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${data.image.full}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
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
