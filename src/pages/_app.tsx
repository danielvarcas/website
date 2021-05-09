import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme, darkTheme } from "../theme";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  function toggleTheme(): void {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }

  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? theme : darkTheme}>
        <CssBaseline />
        <Navbar theme={themeMode} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
