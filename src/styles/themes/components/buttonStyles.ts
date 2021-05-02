import { darken } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      bg: "primary",
      color: "white",
      _hover: {
        bg: darken("primary", 5),
      },
      _active: {
        bg: darken("primary", 15),
      },
    },
    secondary: {
      bg: "secondary",
      color: "black",
      _hover: {
        bg: darken("secondary", 5),
      },
      _active: {
        bg: darken("secondary", 15),
      },
    },
  },
  defaultProps: {},
};
