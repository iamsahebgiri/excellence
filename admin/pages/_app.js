import customTheme from "@/theme/index";
import store from "@/store/index";
import { StoreProvider } from 'easy-peasy';
import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";

const App = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={customTheme}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default App;
