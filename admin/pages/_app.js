import customTheme from "@/theme/index";
import store from "@/store/index";
import { StoreProvider, useStoreRehydrated } from "easy-peasy";
import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import axios from "@/utils/axios";

function WaitForStateRehydration({ children }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

const App = ({ Component, pageProps }) => {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={customTheme}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              axios.get(resource).then((res) => res.data),
          }}
        >
          <WaitForStateRehydration>
            <Component {...pageProps} />
          </WaitForStateRehydration>
        </SWRConfig>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default App;
