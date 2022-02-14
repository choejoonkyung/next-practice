import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { DialogProvider } from "../src/providers/Dialog";
import { GlobalStateProvider } from "../src/providers/Global";
import setTheme from "../src/utils/styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const token = "a";
  const theme = "dark";

  return (
    <GlobalStateProvider token={token}>
      <DialogProvider>
        <Component {...pageProps} />
        <Global styles={setTheme(theme)} />
      </DialogProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
