import customTheme from "@/theme/index";
import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";

const App = ({ Component, pageProps }) => {
  return (
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
  );
};

export default App;
