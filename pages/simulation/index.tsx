import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
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
          placeholder="blur"
        />
        <div className=" absolute h-full w-full translate-x-[15%] translate-y-[10%] ">
          <Link href="/simulation/top-jungle">
            <div className="mg-0 flex h-40 w-40 cursor-pointer items-center justify-center rounded-full bg-green-500 hover:bg-green-600">
              <span>top</span>
            </div>
          </Link>
        </div>
        <div className="absolute h-full w-full translate-x-[47%] translate-y-[35%] ">
          <Link href="/simulation/mid-jungle">
            <div className="mg-0 flex h-40 w-40 cursor-pointer items-center justify-center rounded-full bg-green-500 hover:bg-green-600">
              <span>mid</span>
            </div>
          </Link>
        </div>
        <div className="absolute h-full w-full translate-x-[77%] translate-y-[70%]">
          <Link href="/simulation/ad-support">
            <div className="mg-0 flex h-40 w-40 cursor-pointer items-center justify-center rounded-full bg-green-500 hover:bg-green-600">
              <span>ad</span>
            </div>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default Simulation;
