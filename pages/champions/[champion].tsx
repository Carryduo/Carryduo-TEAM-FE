import { useRouter } from "next/router";
import PageContainer from "../../components/common/PageContainer";

const Champion = () => {
  const {
    query: { champion },
  } = useRouter();
  return <PageContainer>챔피언 이름 : {champion}</PageContainer>;
};

export default Champion;
