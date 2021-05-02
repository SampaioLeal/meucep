import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./components/buttonStyles";
import { InputStyles } from "./components/inputStyles";
import { TextStyles } from "./components/textStyles";

const rocketTheme = extendTheme({
  colors: {
    primary: "#8257E6",
    secondary: "#04D362",
    paper: "#363636",
  },
  components: {
    Button: ButtonStyles,
    Input: InputStyles,
    Text: TextStyles,
  },
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
