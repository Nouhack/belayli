import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import Reducer from "../redux/reducer";

const store = createStore(Reducer);
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
