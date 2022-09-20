import Image from "next/image";
import { useRouter } from "next/router";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { useGetChampDetail } from "../../core/api/champion";
import { useGetChampComments } from "../../core/api/championComments";

interface PageProps {
  query: {
    champion: string;
    name: string;
    category: string;
  };
}

const Champion = (props: { id: number; name: string; category: string }) => {
  const { data: Champion } = useGetChampDetail(props.id);
  const { data: Comments } = useGetChampComments(props.category, props.id);
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
              src={
                Champion?.data.champImg === undefined
                  ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                  : String(Champion?.data.champImg)
              }
              priority
            />
            <span className="text-2xl">{Champion?.data.champNameKo}</span>
            <div>
              {Champion?.data.skill.map((data) => {
                return (
                  <div key={data.id}>
                    <Image
                      width={30}
                      height={30}
                      alt=""
                      src={
                        data.sillImg === undefined
                          ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                          : String(data.sillImg)
                      }
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
        {Comments?.data.map((data) => {
          return <span key={data.id}>{data.content}</span>;
        })}
      </Grid>
    </PageContainer>
  );
};

export default Champion;

export const getServerSideProps = async (context: PageProps) => {
  const propsData = context.query;
  return {
    props: {
      id: Number(propsData.champion),
      name: propsData.name,
      category: propsData.category,
    },
  };
};
