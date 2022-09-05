import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderMain from "../components/layouts/Main/HeaderMain";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useEffect, useState } from "react";
import MainContainer from "../components/layouts/Main/MainContainer";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  const [queryClient] = React.useState(() => new QueryClient());
  const [isWindows, setIsWindows] = useState<boolean>(true);
  useEffect(() => {
    const window =
      navigator.userAgent.includes("Windows") ||
      navigator.userAgent.includes("Macintosh");
    setIsWindows(Boolean(window));
  }, []);
  return (
    <>
      {isWindows ? (
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <ReactQueryDevtools initialIsOpen={true} />
              <MainContainer>
                <HeaderMain />
                <Component {...pageProps} />
              </MainContainer>
            </Hydrate>
          </QueryClientProvider>
        </RecoilRoot>
      ) : (
        "mobile 환경은 지원하지 않습니다 pc로 접속해주세요"
      )}
    </>
  );
}

export default MyApp;
