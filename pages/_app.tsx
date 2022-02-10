import type { AppProps } from "next/app";
import { PortalProvider } from "../src/providers/Portal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortalProvider>
      <Component {...pageProps} />
    </PortalProvider>
  );
}

export default MyApp;
