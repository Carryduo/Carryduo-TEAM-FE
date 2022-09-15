import Image from "next/image";
import { useQuery } from "react-query";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { Champion, getChamp } from "../../core/api/champion";

interface PageProps {
  params: {
    champion: string;
  };
}

const Champion = (props: { name: string; champ: Champion }) => {
  const { data } = useQuery<Champion>(
    ["champion", props.name],
    () => getChamp(String(props.name)),
    {
      initialData: props.champ,
    }
  );
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
              {data?.spells.map((data) => {
                return (
                  <div key={data.id}>
                    <Image
                      width={30}
                      height={30}
                      alt=""
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

export const getServerSideProps = async (context: PageProps) => {
  const {
    params: { champion: name },
  } = context;
  const champ = await getChamp(name);
  return { props: { champ, name } };
};
