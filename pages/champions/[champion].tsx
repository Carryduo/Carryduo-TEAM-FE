import CommentsFormContainer from "../../components/container/CommentsFormContainer";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import { useRouter } from "next/router";
import ChampionDetailContainer from "../../components/container/ChampionDetailContainer";
import { GetStaticPaths } from "next";
import { instance } from "../../core/api/axios";
import ChampionWinRateContainer from "../../components/container/ChampionWinRateContainer";
import { useLoading } from "../../util/hooks/useLoading";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";
import { Champions } from "../../core/api/champions/types";
import { useGetPosition } from "../../util/hooks/useGetPosition";
import { queryClient } from "../_app";
import { useChampDetail } from "../../core/api/champion/queries";
import { dehydrate } from "react-query";
import { getDuoChampRank } from "../../core/api/duoChampion/queries";

interface Prop {
  champion: string;
  line: string;
}

interface PageProps {
  params: Prop;
}

const Champion = ({ champion, line }: Prop) => {
  const { query } = useRouter();
  const loading = useLoading();
  return (
    <PageContainer space="space-x-4">
      <Seo title={query.name === undefined ? "loading" : String(query.name)} />
      {loading ? (
        <LoadingContainer text="loading..." />
      ) : (
        <>
          <div className="h-full w-full space-y-4">
            <Grid width="w-[900px]" height="h-1/2">
              <ChampionDetailContainer line={line} champId={champion} />
            </Grid>
            <Grid width="w-[900px]" height="h-1/2">
              <ChampionWinRateContainer
                ChampionName={String(query.name)}
                category={champion}
                line={line}
              />
            </Grid>
          </div>
          <Grid width="w-full min-w-[300px]" height="h-[calc(100%+1rem)]">
            <CommentsFormContainer category="champ" champId={champion} />
          </Grid>
        </>
      )}
    </PageContainer>
  );
};

export default Champion;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: Champions } = await instance.get("/champ");
  return {
    paths: Champions.map((data: Champions) => {
      return {
        params: {
          champion: data.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context: PageProps) => {
  const { champion } = context.params;
  const res = await instance.get(`/champ/${champion}`);
  let num = String(
    Math.max(...Object.values(res.data.rateInfo.rate).map(Number))
  );
  if (num.length === 2) {
    num = num + ".00";
  } else if (num.length === 3) {
    num = num + ".00";
  } else if (num.includes(".") && num.length === 4) {
    num = num + "0";
  }
  const line = useGetPosition(res.data.rateInfo.rate, num);
  try {
    await queryClient.prefetchQuery(["Champ", champion], () =>
      useChampDetail(champion)
    );
    await queryClient.prefetchQuery(["DuoChampRank", champion, line], () =>
      getDuoChampRank(champion, String(line))
    );
    return {
      props: {
        champion,
        line,
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
};
