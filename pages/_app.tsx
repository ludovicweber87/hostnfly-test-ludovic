import { ChakraProvider } from "@chakra-ui/react";
import SWRProvider from "@hostnfly/lib/swr-provider";
import theme from "@hostnfly/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRProvider>
  );
}

export default MyApp;
