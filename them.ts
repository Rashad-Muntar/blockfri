import { extendTheme } from "@chakra-ui/react";

const colors = {
  textDefault: "#d2dae2",
  textGray: "#808e9b",
  pimaryBg: "#1e272e",
  mGold: "#ffc048",
  jadeBlue: "#00d8d6",
  winklePurple: "#575fcf",
  sunsetRed: "#ff5e57",
  primaryGradient:
    "linear-gradient(90deg, rgba(255,94,87,1) 27%, rgba(0,212,255,1) 100%);",
};

const borderRadius = {
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

const theme = extendTheme({
  colors,
  borderRadius,
  pad: "10px",
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;
