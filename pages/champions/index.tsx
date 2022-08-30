import { useRouter } from "next/router";
import PageContainer from "../../components/common/PageContainer";

const ChampionsList = () => {
  const router = useRouter();
  const onClickChampionsPage = (champion: string) => {
    router.push({
      pathname: `/champions/${champion}`,
    });
  };
  return (
    <PageContainer>
      {["룰루", "카이사", "세라핀"].map((data) => {
        return (
          <span
            className="mr-2 cursor-pointer"
            onClick={() => onClickChampionsPage(data)}
            key={data}
          >
            {data}
          </span>
        );
      })}
    </PageContainer>
  );
};

export default ChampionsList;
