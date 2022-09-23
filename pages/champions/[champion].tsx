import Image from "next/image";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/layouts/CommentsFormContainer";
import {
  useGetChampDetail,
  useGetMostChampSummoner,
} from "../../core/api/champion";
import { useTier } from "../../util/hooks/useTier";

interface PageProps {
  query: Props;
}

interface Props {
  champId: number;
  name: string;
  category: string;
  champion: string;
}

const Champion = ({ champId, name, category }: Props) => {
  const { data: Champion } = useGetChampDetail(champId);
  const { data: MostSummoner } = useGetMostChampSummoner(champId);
  return (
    <PageContainer space="space-x-4">
      <Seo title={name} />
      <div className="h-full w-full space-y-4">
        <Grid width="w-[700px]" height="h-1/2">
          <div className="flex h-full items-center space-x-10 p-2">
            <div>
              <Image
                width={200}
                height={200}
                alt=""
                src={
                  Champion?.data.champImg === undefined
                    ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                    : String(Champion?.data.champImg)
                }
                priority
              />
            </div>
            <div className="flex flex-col space-y-8">
              <span className="text-2xl">{Champion?.data.champNameKo}</span>
              <div className="flex space-x-2 ">
                <div>
                  <Image
                    width={30}
                    height={30}
                    alt=""
                    src={
                      Champion?.data.skill[4].image === undefined
                        ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                        : String(Champion?.data.skill[4].image)
                    }
                    priority
                  />
                </div>
                {Champion?.data.skill.slice(0, 4).map((data) => {
                  return (
                    <div key={data.id}>
                      <Image
                        width={45}
                        height={45}
                        alt=""
                        src={
                          data.image === undefined
                            ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                            : String(data.image)
                        }
                        priority
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex space-x-2 text-sm">
                <span>승률 67%</span>
                <span>픽률 33%</span>
                <span>벤률 13%</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span>선호 챔피언 유저</span>
              {MostSummoner?.data.map((data) => {
                return (
                  <span key={data.id}>
                    {data.nickname} / {useTier(data.tier)}
                  </span>
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
        <CommentsFormContainer category={category} champId={champId} />
      </Grid>
    </PageContainer>
  );
};

export default Champion;

export const getServerSideProps = (context: PageProps) => {
  const propsData = context.query;
  if (propsData.name === undefined) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      champId: Number(propsData.champion),
      name: propsData.name,
      category: propsData.category,
    },
  };
};
