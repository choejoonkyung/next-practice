import type { AppProps } from "next/app";
import { DialogProvider } from "../src/providers/Dialog";
import { GlobalStateProvider, useGlobalState } from "../src/providers/Global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const token = "a";

  return (
    <GlobalStateProvider token={token}>
      <DialogProvider>
        <Component {...pageProps} />
      </DialogProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
