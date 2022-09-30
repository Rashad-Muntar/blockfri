import "../styles/globals.css";
import 'swiper/css';
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../src/State/Store/store";
import theme from "../them";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
      
    </ChakraProvider>
  );
}

export default MyApp;
