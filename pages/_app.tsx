import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderMain from "../components/container/Main/HeaderContainer";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useEffect, useState } from "react";
import MainContainer from "../components/container/Main/MainContainer";
import { RecoilRoot } from "recoil";
import Router from "next/router";
import LoadingContainer from "../components/layouts/Handler/LoadingContainer";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
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

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
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
                {loading ? <LoadingContainer /> : <Component {...pageProps} />}
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
