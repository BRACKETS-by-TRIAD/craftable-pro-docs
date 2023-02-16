import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

import "../style.css";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <PlausibleProvider domain="docs.craftable.pro">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
