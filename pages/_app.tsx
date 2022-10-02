import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { storeWrapper } from "../src/State/store";
import theme from "../them";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default storeWrapper.withRedux(MyApp);
