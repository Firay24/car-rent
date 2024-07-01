import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },
  colors: {
    primaryBlue: "#3563E9",
    secondaryBlue: "#2953CB",
    primaryGray: "#131313",
    primaryDark: "#1A202C",
    secondaryDark: "#596780",
    textSecondary: "#90A3BF",
  },
});

export default theme;
