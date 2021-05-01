import { extendTheme } from "@chakra-ui/react";

const rocketTheme = extendTheme({
  styles: {
    global: {
      body: {
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundImage:
          "radial-gradient(30.37% 30.37% at 50% 69.63%, #402285 0%, #121214 100%)",
      },
    },
  },
});

export default rocketTheme;
