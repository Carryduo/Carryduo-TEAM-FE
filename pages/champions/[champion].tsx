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
import { queryClient } from "../_app";
import { useChampDetail } from "../../core/api/champion/queries";
import { dehydrate } from "react-query";
import { getDuoChampRank } from "../../core/api/duoChampion/queries";
import { useRecoilState } from "recoil";
import { PickPosition } from "../../core/config/PickPosition";
import { useEffect } from "react";

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
  const [position, setPosition] = useRecoilState(PickPosition);
  useEffect(() => {
    setPosition(line);
  }, [line]);
  return (
    <PageContainer space="space-x-4">
      <Seo title={query.name === undefined ? "loading" : String(query.name)} />
      {loading ? (
        <LoadingContainer text="loading..." />
      ) : (
        <>
          <div className="h-full w-full space-y-4">
            <Grid width="w-[900px]" height="h-1/2">
              <ChampionDetailContainer line={position} champId={champion} />
            </Grid>
            <Grid width="w-[900px]" height="h-1/2">
              <ChampionWinRateContainer category={champion} line={position} />
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
  const res = await instance.get(`/champ/${champion}/position/default`);
  const line = res.data.position;
  try {
    await Promise.all([
      queryClient.prefetchQuery(["Champ", champion, line], () =>
        useChampDetail(champion, String(line))
      ),
      queryClient.prefetchQuery(["DuoChampRank", champion, line], () =>
        getDuoChampRank(champion, String(line))
      ),
    ]);
    return {
      props: {
        champion,
        line,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
};
