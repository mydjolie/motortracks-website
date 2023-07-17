import { extendTheme } from "@chakra-ui/react";

const colors = {
  dark: "#1B1919",
};

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        position: "relative",
        boxSizing: "border-box",
      },
    },
  },
  colors,
});

export default theme;
