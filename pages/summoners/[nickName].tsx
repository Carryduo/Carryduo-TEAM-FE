import { useRouter } from "next/router";
import PageContainer from "../../components/common/PageContainer";

const Summoners = () => {
  const {
    query: { nickName },
  } = useRouter();
  return <PageContainer>소환사 정보 {nickName}</PageContainer>;
};

export default Summoners;
