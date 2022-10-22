import type { AppProps } from "next/app";
import HeaderMain from "../components/container/Main/HeaderContainer";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import LoadingContainer from "../components/layouts/Handler/LoadingContainer";
import "../styles/globals.css";
import "../styles/slick.css";
import { useWindow } from "../util/hooks/useWindow";
import PageContainer from "../components/common/PageContainer";
import MainContainer from "../components/container/Main/MainContainer";
import ChannelService from "../util/servers/ChannelService";
import { useGetMyProfile } from "../core/api/profile/queries";

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
  const pc = useWindow();
  const [query] = useState(() => queryClient);
  if (typeof window === undefined) return;
  useEffect(() => {
    const channelTalk = new ChannelService();
    channelTalk.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY,
    });
    return () => {
      channelTalk.shutdown();
    };
  }, []);
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={query}>
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools initialIsOpen={true} />
            <MainContainer>
              {pc ? (
                <>
                  <HeaderMain />
                  <Component {...pageProps} />
                </>
              ) : (
                <PageContainer>
                  <LoadingContainer text="pc를 제외한 다른 환경에서는 해당 사이트를 이용하실 수 없습니다" />
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
