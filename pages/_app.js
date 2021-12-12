import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

import React from "react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
