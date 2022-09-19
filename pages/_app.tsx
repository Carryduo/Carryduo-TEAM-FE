import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderMain from "../components/layouts/Main/HeaderMain";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useEffect, useState } from "react";
import MainContainer from "../components/layouts/Main/MainContainer";
import { RecoilRoot } from "recoil";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [isWindows, setIsWindows] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    const window =
      navigator.userAgent.includes("Windows") ||
      navigator.userAgent.includes("Macintosh");
    setIsWindows(Boolean(window));

    if (pageProps.prop === "Lazy Loading") {
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);

      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };
    } else setLoading(false);
  }, [pageProps]);
  return (
    <>
      {isWindows ? (
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <ReactQueryDevtools initialIsOpen={true} />
              <MainContainer>
                <HeaderMain />
                {loading ? (
                  <span>Loading</span>
                ) : (
                  <Component {...pageProps} />
                )}{" "}
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
