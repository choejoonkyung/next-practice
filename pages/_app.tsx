import type { AppProps } from "next/app";
import { DialogProvider } from "../src/providers/Dialog";
import { GlobalStateProvider } from "../src/providers/Global";
import { PortalProvider } from "../src/providers/Portal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <PortalProvider>
        <DialogProvider>
          <Component {...pageProps} />
        </DialogProvider>
      </PortalProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
