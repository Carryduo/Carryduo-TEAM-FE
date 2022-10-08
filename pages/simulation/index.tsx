import Image from "next/image";
import Link from "next/link";
import PageContainer from "../../components/common/PageContainer";
import MiniMap from "../../public/minimap.jpg";

const Simulation = () => {
  return (
    <PageContainer>
      <div className="relative flex h-full w-full justify-center">
        <Image
          alt=""
          src={MiniMap}
          priority
          layout="fill"
          className="absolute -z-50 rounded-lg"
        />
        <Link href="/simulation/top-jungle">
          <div className="absolute h-full w-full translate-x-[15%] translate-y-[10%] cursor-pointer">
            <div className="mg-0 flex h-40 w-40 items-center justify-center rounded-full bg-green-500 hover:bg-green-600">
              <span>top</span>
            </div>
          </div>
        </Link>
        <Link href="/simulation/mid-jungle">
          <div className="absolute h-full w-full translate-x-[47%] translate-y-[35%] cursor-pointer">
            <div className="mg-0 flex h-40 w-40 items-center justify-center rounded-full bg-green-500 hover:bg-green-600">
              <span>mid</span>
            </div>
          </div>
        </Link>
        <Link href="/simulation/ad-support">
          <div className="absolute h-full w-full translate-x-[77%] translate-y-[70%] cursor-pointer">
            <div className="mg-0 flex h-40 w-40 items-center justify-center rounded-full bg-green-500 hover:bg-green-600">
              <span>ad</span>
            </div>
          </div>
        </Link>
      </div>
    </PageContainer>
  );
};

export default Simulation;
