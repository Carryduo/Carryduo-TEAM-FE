import Image from "next/image";
import mainImage from "../../../public/summonersrift.jpg";
import React from "react";
import { getShadowColor } from "../../../core/config/shadowColor";
import { useShadow } from "../../../util/hooks/useShadow";

interface DarkContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: DarkContainerProps) => {
  const [color] = useShadow(getShadowColor);
  return (
    <div className="relative flex h-screen min-h-[800px] w-full min-w-[1640px] items-center justify-center bg-black bg-opacity-50">
      <Image
        alt="Summonersrift"
        layout="fill"
        quality={10}
        src={mainImage}
        className="absolute -z-50"
        priority
      />
      <div
        className={`z-50 h-[85%] w-[80%] overflow-hidden rounded-xl bg-black bg-opacity-30 px-10 shadow-[0_0_40px_1px] shadow-[#5F99FF]`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
