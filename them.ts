import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    textDefault: "#d2dae2",
    textGray: "#485460",
    pimaryBg: "#1e272e",
    yellow: "#ffc048",
    jadeBlue: "#00d8d6",
    winklePurple: "#575fcf",
    sunsetRed: "#ff5e57",

    primaryGradient:
      "linear-gradient(90deg, rgba(255,94,87,1) 27%, rgba(0,212,255,1) 100%);",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
