import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import PageContainer from "../../components/common/PageContainer";
import { MyProfile } from "../../config/Recoil/MyProfile";

const Profile = () => {
  const { nickName, image, mostPick } = useRecoilValue(MyProfile);

  return (
    <PageContainer>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Image alt="" width={100} height={100} src={image} />
        <span>{nickName}</span>
        <span>Challenger 1023p</span>
        <div className="flex w-1/4 justify-around">
          {mostPick.map((data) => {
            return (
              <Image
                className="rounded-full"
                key={data}
                alt=""
                width={50}
                height={50}
                src={data}
              />
            );
          })}
        </div>
        <div>모스트 픽 캐릭터 변경</div>
      </div>
    </PageContainer>
  );
};

export default Profile;
