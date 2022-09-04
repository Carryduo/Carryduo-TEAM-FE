import Image from "next/image";
import { useRecoilValue } from "recoil";
import PageContainer from "../../components/common/PageContainer";

const Profile = () => {
  return (
    <PageContainer>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <span>Challenger 1023p</span>
        <div>모스트 픽 캐릭터 변경</div>
      </div>
    </PageContainer>
  );
};

export default Profile;
