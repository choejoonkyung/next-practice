import type { AppContext, AppProps } from "next/app";
import "../styles/globals.css";
import App from "next/app";
import Service from "../utils/Service";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  Service.setInstance();
  Service.setToken(appContext.ctx);
  Service.setReqInterceptor();
  Service.setResInterceptor(appContext.ctx);

  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
