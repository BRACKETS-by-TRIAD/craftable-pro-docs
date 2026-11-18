import Head from "next/head";
import { useEffect } from "react";

// The root has no content of its own — forward visitors to the latest version.
// Done client-side because next.config redirects() are not supported by `output: export`.
export default function Index() {
  useEffect(() => {
    window.location.replace("/v3");
  }, []);

  return (
    <Head>
      <meta httpEquiv="refresh" content="0; url=/v3" />
    </Head>
  );
}
