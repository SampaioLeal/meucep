import { extendTheme } from "@chakra-ui/react";

const rocketTheme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      body: {
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundImage:
          "radial-gradient(39.11% 39.11% at 50% 60.89%, #402285 0%, #121214 100%)",
      },
    },
  },
});

export default rocketTheme;
