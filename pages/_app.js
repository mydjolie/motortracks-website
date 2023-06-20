// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "../src/app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
