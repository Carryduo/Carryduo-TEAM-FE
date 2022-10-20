import type { AppProps } from "next/app";
import HeaderMain from "../components/container/Main/HeaderContainer";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import LoadingContainer from "../components/layouts/Handler/LoadingContainer";
import "../styles/globals.css";
import "../styles/slick.css";
import { useWindow } from "../util/hooks/useWindow";
import PageContainer from "../components/common/PageContainer";
import dynamic from "next/dynamic";
import MainContainer from "../components/container/Main/MainContainer";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      retry: false,
      cacheTime: 1000 * 60 * 60 * 24 * 7,
    },
  },
});

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [query] = useState(() => queryClient);
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={query}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools initialIsOpen={true} />
            <MainContainer>
              <HeaderMain />
              <Component {...pageProps} />
            </MainContainer>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
