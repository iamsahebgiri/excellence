import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "@/theme/index";

import 'katex/dist/katex.min.css';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
