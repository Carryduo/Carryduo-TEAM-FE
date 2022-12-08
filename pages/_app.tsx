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
import "../styles/globals.css";
import "../styles/slick.css";
import MainContainer from "../components/container/Main/MainContainer";
import ChannelService from "../util/servers/ChannelService";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      cacheTime: Infinity,
    },
  },
});

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) => {
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
    <RecoilRoot>
      <QueryClientProvider client={query}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
          <MainContainer>
            <HeaderMain />
            <Component {...pageProps} />
          </MainContainer>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
