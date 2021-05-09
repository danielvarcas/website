import { createMuiTheme } from "@material-ui/core";

const xiketic = "#070614";
const electricBlue = "#8BF9F5";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: xiketic,
    },
    secondary: {
      main: electricBlue,
    },
  },
});

const mediumBlue = "#2e20c9";
const celeste = "#9EFAF7";

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
      main: celeste,
    },
  },
});
