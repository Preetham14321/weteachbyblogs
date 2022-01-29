import React, { useState } from "react";
import { Loader } from "../Components";
import Router from "next/router";

import { Layout } from "../Components";

import "../styles/globals.scss";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    console.log("router Changing the url");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log("router Changed the url");
    setLoading(false);
  });

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Layout>
        {loading && <Loader />}
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
