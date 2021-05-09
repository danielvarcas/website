import { createMuiTheme } from "@material-ui/core";

const xiketic = "#070614";
const mediumBlue = "#2e20c9";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: xiketic,
    },
    secondary: {
      main: mediumBlue,
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#000",
    },
    primary: {
      main: mediumBlue,
    },
    secondary: {
      main: "#fff",
    },
  },
});
