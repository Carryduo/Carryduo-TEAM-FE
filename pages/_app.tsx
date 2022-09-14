import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderMain from "../components/layouts/Main/HeaderMain";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useEffect, useState } from "react";
import MainContainer from "../components/layouts/Main/MainContainer";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [isWindows, setIsWindows] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const window =
      navigator.userAgent.includes("Windows") ||
      navigator.userAgent.includes("Macintosh");
    setIsWindows(Boolean(window));
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);
    router.events.on("routeChangeError", (e) => handleComplete);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", (e) =>
      setTimeout(() => {
        setLoading(false);
      }, 500)
    );

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(false));
      router.events.off("routeChangeComplete", (e) =>
        setTimeout(() => {
          setLoading(true);
        }, 1000)
      );
    };
  }, [router.asPath, router.events]);
  return (
    <>
      {isWindows ? (
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <ReactQueryDevtools initialIsOpen={true} />
                {loading ? (
                  <div>loading...</div>
                ) : (
                  <MainContainer>
                    <HeaderMain />
                    <Component {...pageProps} />
                  </MainContainer>
                )}
              </Hydrate>
            </QueryClientProvider>
          </RecoilRoot>
        </SessionProvider>
      ) : (
        "mobile 환경은 지원하지 않습니다 pc로 접속해주세요"
      )}
    </>
  );
}

export default MyApp;
