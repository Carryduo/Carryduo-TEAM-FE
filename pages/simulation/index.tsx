import Link from "next/link";
import PageContainer from "../../components/common/PageContainer";
import LoadingContainer from "../../components/layouts/Handler/LoadingContainer";
import { useLoading } from "../../util/hooks/useLoading";

const Simulation = () => {
  const loading = useLoading();
  return (
    <PageContainer>
      {loading ? (
        <LoadingContainer text="챔피언을 불러오는중입니다..." />
      ) : (
        <div className="relative flex h-full w-full">
          <img
            alt=""
            src="/minimap.jpg"
            className="absolute -z-50 h-full w-full rounded-lg"
          />
          <div className="absolute translate-x-[40%] translate-y-[5%]  ">
            <Link href="/simulation/top-jungle">
              <a>
                <span className="absolute top-[100px] left-[100px] text-4xl hover:text-blue-400">
                  탑 - 정글
                </span>
                <div className="cursor-pointer border-t-[500px] border-r-[500px] border-r-transparent border-t-black border-opacity-40"></div>
              </a>
            </Link>
          </div>
          <div className="absolute  z-40 translate-x-[200%] translate-y-[10%]">
            <Link href="/simulation/mid-jungle">
              <a>
                <span className="absolute bottom-[200px] right-[100px] z-50 text-4xl hover:text-blue-400">
                  미드 - 정글
                </span>
                <div className="h-[500px] w-[300px] -skew-x-[45deg]   cursor-pointer bg-black bg-opacity-40" />
              </a>
            </Link>
          </div>
          <div className="absolute  translate-x-[150%] translate-y-[20%] ">
            <Link href="/simulation/ad-support">
              <a>
                <span className="absolute bottom-[100px] right-[100px] text-4xl hover:text-blue-400">
                  원딜 - 서폿
                </span>
                <div className="cursor-pointer border-t-[500px] border-r-[500px] border-t-transparent border-r-black border-opacity-40 " />
              </a>
            </Link>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default Simulation;
