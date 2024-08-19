import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { NotificationProvider } from "@/layouts/LayoutsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </SessionProvider>
  );
}

export default MyApp;
