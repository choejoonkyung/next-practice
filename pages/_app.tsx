import type { AppProps } from "next/app";
import { DialogProvider } from "../src/providers/Dialog";
import { GlobalStateProvider } from "../src/providers/Global";
import { PortalProvider } from "../src/providers/Portal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <DialogProvider>
        <Component {...pageProps} />
      </DialogProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
