import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderMain from "../components/layouts/Main/HeaderMain";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import SideSection from "../components/layouts/Main/SideSection";
import LayoutMain from "../components/layouts/Main/LayoutMain";
import { RecoilRoot } from "recoil";
import DarkContainer from "../components/layouts/Main/DarkContainer";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  switch (pageProps.layout) {
    case "intro": {
      return <Component {...pageProps} />;
    }
    default: {
      return (
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <ReactQueryDevtools initialIsOpen={true} />
              <DarkContainer>
                <HeaderMain />
                <LayoutMain>
                  <SideSection />
                  <Component {...pageProps} />
                </LayoutMain>
              </DarkContainer>
            </Hydrate>
          </QueryClientProvider>
        </RecoilRoot>
      );
    }
  }
}

export default MyApp;
