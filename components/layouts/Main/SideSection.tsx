import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { MyProfile } from "../../../config/Recoil/MyProfile";

const SideSection = () => {
  const router = useRouter();
  const { id, image } = useRecoilValue(MyProfile);
  const onClickPageRouter = (id: string) => {
    router.push({
      pathname: `/profile/${id}`,
    });
  };
  return (
    <section className=" flex h-[760px] w-[130px] flex-col items-center justify-around bg-blue-400">
      <div onClick={() => onClickPageRouter(id)}>
        <Image width={50} height={50} src={image} alt="" />
      </div>
      <Link href="/champions">챔피언 리스트</Link>
      <Link href="/simulation">가상 시뮬레이션</Link>
      <button>다크모드</button>
      <Link href="/">메인</Link>
    </section>
  );
};

export default SideSection;
