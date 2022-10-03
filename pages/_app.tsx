import type { AppProps } from "next/app";
import HeaderMain from "../components/container/Main/HeaderContainer";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import MainContainer from "../components/container/Main/MainContainer";
import { RecoilRoot } from "recoil";
import LoadingContainer from "../components/layouts/Handler/LoadingContainer";
import "../styles/globals.css";
import "../styles/slick.css";
import { useWindow } from "../util/hooks/useWindow";
import PageContainer from "../components/common/PageContainer";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 24 * 7,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const window = useWindow();
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools initialIsOpen={true} />
            <MainContainer>
              {window ? (
                <>
                  <HeaderMain />
                  <Component {...pageProps} />
                </>
              ) : (
                <PageContainer>
                  <LoadingContainer text="Mobile 환경에서는 해당 사이트를 이용하실 수 없습니다" />
                </PageContainer>
              )}
            </MainContainer>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
