import Image from "next/image";
import mainImage from "../../../public/summonersrift.jpg";

interface DarkContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: DarkContainerProps) => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black bg-opacity-60">
      <Image
        alt="Summonersrift"
        layout="fill"
        src={mainImage}
        quality={100}
        className="absolute -z-50"
        loading="eager"
      />
      <div className="z-50 h-[800px] w-[1500px] overflow-hidden rounded-xl bg-black bg-opacity-30 px-10 shadow-[0_0_40px_1px] shadow-blue-200">
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
