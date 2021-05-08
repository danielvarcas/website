import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
