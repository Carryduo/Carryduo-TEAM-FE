import Image from "next/image";
import { useQuery } from "react-query";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { getChamps } from "../api/champions";

const Champion = (props: any) => {
  const { data } = useQuery(["test"], () => getChamps(String(props.name)), {
    initialData: props.champ,
  });
  return (
    <PageContainer space="space-x-4">
      <Seo title={String(props.name)} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[700px]" height="h-1/2">
          <div className="flex">
            <Image
              width={120}
              height={100}
              alt=""
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data?.id}_0.jpg`}
              priority
            />
            <span className="text-2xl">{data?.id}</span>
            <div>
              {data?.spells?.map((data: any) => {
                return (
                  <div key={data.id}>
                    <Image
                      width={30}
                      height={30}
                      alt=""
                      src={`https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/${data.image.full}`}
                      priority
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

export async function getServerSideProps(context: { params: any }) {
  const {
    params: { champion: name },
  } = context;
  const champ = await getChamps(name);
  console.log(champ);
  return { props: { champ, name } };
}
