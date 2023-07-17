// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme/theme";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
