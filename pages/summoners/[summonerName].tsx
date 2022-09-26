import Image from "next/image";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/layouts/CommentsFormContainer";
import { useGetSummoner } from "../../core/api/summoner";

interface pageProps {
  query: Props;
}

interface Props {
  summonerName: string;
  category: string;
}

const Summoners = ({ summonerName, category }: Props) => {
  const { data: Summoner } = useGetSummoner(summonerName);
  return (
    <PageContainer space="space-x-4">
      <Seo title={Summoner === undefined ? "정보없음" : summonerName} />
      {Summoner === undefined ? (
        <Grid width="w-full" height="h-full">
          <span>사용자 정보가 없습니다</span>
        </Grid>
      ) : (
        <>
          <div className="h-full w-full space-y-4">
            <Grid width="w-[700px]" height="h-1/2">
              <div className="flex space-x-4">
                <span className="text-2xl">{summonerName}</span>
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src={
                    Summoner?.tierImg === undefined
                      ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                      : String(Summoner.tierImg)
                  }
                />
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src={
                    Summoner.summonerIcon === undefined
                      ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                      : String(Summoner.summonerIcon)
                  }
                  className="rounded-3xl"
                />
                <span>{`승률 : ${Summoner.winRate}%`}</span>
                <span>{`레벨: ${Summoner.summonerLevel}`}</span>
                <span>{`티어: ${Summoner.tier}`}</span>
                <span>{`LP: ${Summoner.lp}`}</span>
              </div>
            </Grid>
            <Grid width="w-[700px]" height="h-1/2">
              <span>소환사 모스트 픽</span>
              <div className="flex space-x-4">
                {Summoner.mostChamps.map((data, i) => {
                  return (
                    <div key={data.id}>
                      <Image
                        width={150}
                        height={150}
                        alt=""
                        src={
                          data.champImg === undefined
                            ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                            : String(data.champImg)
                        }
                      />
                      <span>{i + 1}등</span>
                    </div>
                  );
                })}
              </div>
            </Grid>
          </div>
          <Grid width="w-full" height="h-[calc(100%+1rem)]">
            <CommentsFormContainer category={category} champId={Summoner.id} />
          </Grid>
        </>
      )}
    </PageContainer>
  );
};

export default Summoners;

export const getServerSideProps = (context: pageProps) => {
  const propsData = context.query;
  return {
    props: {
      summonerName: propsData.summonerName,
      category: "summoner",
    },
  };
};
