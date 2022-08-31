import { useRouter } from "next/router";
import PageContainer from "../../components/common/PageContainer";
import { useChampions } from "../api/champions";

const ChampionsList = () => {
  const router = useRouter();
  const onClickChampionsPage = (champion: string, id: string) => {
    router.push({
      pathname: `/champions/${champion}`,
      query: {
        championId: id,
      },
    });
  };
  const { data: Champions, isLoading, isError } = useChampions();
  if (isError) {
    return (
      <PageContainer>
        <span>데이터가 없습니다</span>
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <div className="absolute top-32 grid h-[600px] w-72 grid-cols-5 overflow-x-hidden">
        {isLoading
          ? "Loading..."
          : Champions?.data.map((data) => {
              return (
                <div
                  onClick={() => onClickChampionsPage(data.name, data.id)}
                  key={data.id}
                  className="h-12 w-12 cursor-pointer rounded-sm border-[1px] border-solid border-black"
                >
                  <span className="">{data.name.substring(0, 4)}</span>
                </div>
              );
            })}
      </div>
    </PageContainer>
  );
};

export default ChampionsList;
