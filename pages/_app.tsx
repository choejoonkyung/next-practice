import type { AppProps } from "next/app";
import { DialogProvider } from "../src/components/common/Dialog/useDialog";
import { PortalProvider } from "../src/providers/Portal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortalProvider>
      <DialogProvider>
        <Component {...pageProps} />
      </DialogProvider>
    </PortalProvider>
  );
}

export default MyApp;
