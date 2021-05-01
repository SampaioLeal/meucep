import { extendTheme } from "@chakra-ui/react";

const rocketTheme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      body: {
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: "#121214",
      },
    },
  },
});

export default rocketTheme;
