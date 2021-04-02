import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "@/theme/index";


const App = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
