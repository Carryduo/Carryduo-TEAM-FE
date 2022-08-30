import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import FooterIntro from "../components/layouts/Intro/FooterIntro";
import HeaderIntro from "../components/layouts/Intro/HeaderIntro";
import LayoutIntro from "../components/layouts/Intro/LayoutIntro";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <HeaderIntro />
      <LayoutIntro />
      <div className="h-full w-full">
        <div
          className={`flex h-screen w-full items-center justify-center bg-black bg-opacity-50`}
        >
          <Link href="/main" replace>
            <button className="mb-20 h-14 w-72 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <span className="px-4">메인 페이지 입장</span>
            </button>
          </Link>
        </div>
        <div className="fixed top-0 -z-50 h-full w-full scale-x-125">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-nzL4LQ-5I8&t=1s"
            volume={0}
            controls={false}
            muted={true}
            playing={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div
          className={`flex h-screen w-full items-center justify-center bg-green-600`}
        >
          <div>소개</div>
        </div>
      </div>
      <FooterIntro />
    </React.Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  return { props: { layout: "intro" } };
};
