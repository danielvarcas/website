import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
