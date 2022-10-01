import Image from "next/image";
import Grid from "../../components/common/Grid";
import PageContainer from "../../components/common/PageContainer";
import Seo from "../../components/common/Seo";
import CommentsFormContainer from "../../components/layouts/CommentsFormContainer";
import LoadingPage from "../../components/layouts/LoadingPage";
import { useGetSummoner } from "../../core/api/summoner";
import { getCookie } from "../../util/servers/cookie";

interface pageProps {
  query: Props;
}

interface Props {
  summonerName: string;
  category: string;
}

const Summoners = ({ summonerName, category }: Props) => {
  const { data: Summoner, error, isLoading } = useGetSummoner(summonerName);
  return (
    <PageContainer space="space-x-4">
      <Seo title={Summoner === undefined ? "정보없음" : summonerName} />
      {isLoading ? (
        <LoadingPage />
      ) : Summoner === undefined ? (
        <Grid width="w-full" height="h-full">
          <span>{error?.response.data.message}</span>
        </Grid>
      ) : (
        <>
          <div className="h-full w-full space-y-4">
            <Grid width="w-[700px]" height="h-1/2">
              <div className="flex h-full w-full items-center justify-center space-x-14">
                <div className="flex flex-col items-center">
                  <Image
                    width={192}
                    height={192}
                    alt=""
                    src={
                      Summoner.summonerIcon === undefined
                        ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                        : String(Summoner.summonerIcon)
                    }
                    className="rounded-3xl"
                    priority
                  />
                  <span className="z-50 -mt-4 rounded-xl bg-gray-700 py-1 px-3 text-sm">{`${Summoner.summonerLevel}`}</span>
                </div>
                <div className="space-y-10">
                  <span className="text-2xl">{summonerName}</span>
                  <div className="flex items-center space-x-8">
                    <Image
                      width={64}
                      height={73}
                      alt=""
                      src={
                        Summoner?.tierImg === undefined
                          ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                          : String(Summoner.tierImg)
                      }
                      priority
                    />
                    <div className="flex space-x-8 text-sm">
                      <div className="flex flex-col space-y-4">
                        <span>{`${Summoner.tier}`}</span>
                        <span>{`${Summoner.lp}LP`}</span>
                      </div>
                      <div className="flex flex-col items-end space-y-4 ">
                        <div>
                          <span className=" text-gray-400">{`${Summoner.win}승`}</span>
                          <span className=" text-gray-400">{`${Summoner.lose}패`}</span>
                        </div>
                        <span className=" text-gray-400">{`승률 ${Summoner.winRate}%`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid width="w-[700px]" height="h-1/2">
              <span>소환사 모스트 픽</span>
              <div className="flex h-full w-full items-center justify-around">
                {Summoner.mostChamps.map((data) => {
                  return (
                    <div key={data.id}>
                      <Image
                        width={150}
                        height={256}
                        alt=""
                        src={
                          data.champImg === undefined
                            ? "https://avatars.githubusercontent.com/u/79081800?v=4"
                            : String(data.champImg)
                        }
                        priority
                      />
                    </div>
                  );
                })}
              </div>
            </Grid>
          </div>
          <Grid width="w-full" height="h-[calc(100%+1rem)]">
            {getCookie("myToken") === undefined ? null : (
              <CommentsFormContainer
                category={category}
                champId={Summoner.summonerName}
              />
            )}
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
